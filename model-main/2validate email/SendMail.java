import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.*;

public class SendMail extends HttpServlet {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/test";
    static final String USERNAME = "root";
    static final String PASSWORD = "Shreya@123";
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
        try {
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
            PreparedStatement ps = conn.prepareStatement("INSERT INTO email VALUES (?,?,?)");
            ps.setString(1, request.getParameter("name"));
            ps.setString(2, request.getParameter("email"));
            ps.setString(3, request.getParameter("msg"));
            ps.executeUpdate();
            ps.close();
            conn.close();
            RequestDispatcher rd = request.getRequestDispatcher("get.html");
            rd.forward(request, response);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}