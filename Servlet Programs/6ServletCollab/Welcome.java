import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
//import jakarta.servlet.*;
//import jakarta.servlet.http.*;

public class Welcome extends HttpServlet {
 
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
	       
	//String user1 = (String)request.getAttribute("user");
	String user1 = request.getParameter("user");
        out.println("Hello "+user1);
    }
}
