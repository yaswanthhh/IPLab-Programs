import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.*;

public class AddCar extends HttpServlet {
    static final String USERNAME = "root";
    static final String PASSWORD = "Shreya@123";
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/test";

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        PrintWriter pw = response.getWriter();
        response.setContentType("text/html");
        try {
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
            PreparedStatement ps = conn.prepareStatement("insert into cars values (?,?,?)");
            ps.setString(1, request.getParameter("name"));
            ps.setString(2, request.getParameter("regno"));
            ps.setString(3, request.getParameter("date"));
            ps.executeUpdate();
            ps.close();
            conn.close();
            RequestDispatcher rd = request.getRequestDispatcher("GetCar");
            rd.forward(request, response);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}