import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
//import jakarta.servlet.*;
//import jakarta.servlet.http.*;

public class Validate extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
		PrintWriter out = response.getWriter();
        
        String name = request.getParameter("user");
        String pass = request.getParameter("pass");
        
        if(pass.equals("abcd"))
        {
		
			// Getting RequestDispatcher object
            // for collaborating with Welcome servlet
            RequestDispatcher rd = request.getRequestDispatcher("Welcome");
			
            // forwarding the request to Welcome.java
            rd.forward(request, response);
        }
		else
		{
			out.print("Password mismatch");
            RequestDispatcher rd = request.getRequestDispatcher("/index.html");
        
			rd.include(request, response); 
		}
    }
}
