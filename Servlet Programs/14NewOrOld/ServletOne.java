import java.io.*;
//import javax.servlet.*;
//import javax.servlet.http.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.Date; 

      
public class ServletOne extends HttpServlet {  
      
public void doGet(HttpServletRequest request, HttpServletResponse response){  
        try{  
      
            response.setContentType("text/html"); 
			PrintWriter out = response.getWriter();  
			
			// Create a session object
			HttpSession session = request.getSession(false);
			if(session.isNew())
				out.println("Welcome to the website");
			else
				out.println("Welcome back");
        }catch(Exception e){System.out.println(e);}  
    }  
      
}  