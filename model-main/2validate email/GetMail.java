import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.*;

public class GetMail extends HttpServlet {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/test";
    static final String USERNAME = "root";
    static final String PASSWORD = "Shreya@123";
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
        PrintWriter pw = response.getWriter();

        try {
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
            Statement st = conn.createStatement();
            String sql = "SELECT * FROM email where email='"+request.getParameter("email")+"';";
            pw.println("<table style='width:60%;align:center;'>");
            ResultSet rs = st.executeQuery(sql);
            while(rs.next()) {
                String name = (String)rs.getString("name");
                String email = (String)rs.getString("email");
                String message = (String)rs.getString("message");  
                pw.println("<tr><td style='border:1px solid black;'>"+name+"</td><td style='border:1px solid black;'>"+email+"</td><td style='border:1px solid black;'>"+message+"</td></tr>");
            }
            pw.println("</table>");
            st.close();
            conn.close();
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}