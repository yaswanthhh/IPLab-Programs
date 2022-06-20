
import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.*;

public class GetCar extends HttpServlet {
    static final String USERNAME = "root";
    static final String PASSWORD = "Shreya@123";
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/test";
    int cnt = 1;

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        PrintWriter pw = response.getWriter();
        response.setContentType("text/html");
        try {
            HttpSession session = request.getSession();
            session.setAttribute("cnt",cnt);
            cnt++;
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
            Statement ps = conn.createStatement();
            String sql = "SELECT * FROM CARS";
            ResultSet rs = ps.executeQuery(sql);
            pw.println("<table><th><td>Name</td><td>Registration Number</td><td>Date of booking</td></th>");
            while(rs.next()) {
                pw.println("<tr><td>"+rs.getString("name")+"</td><td>"+rs.getString("regno")+"</td><td>"+rs.getString("date")+"</td></tr>");
            }
            pw.println("</table>");
            pw.println(cnt);
            ps.close();
            conn.close();
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}