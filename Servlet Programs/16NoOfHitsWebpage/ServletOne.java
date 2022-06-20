import java.io.*;
//import javax.servlet.*;
//import javax.servlet.http.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.Date; 

//Number of hit for a web page      
public class ServletOne extends HttpServlet {  
int visits=0;      
public void doGet(HttpServletRequest request, HttpServletResponse response){  
        try{  
      
            response.setContentType("text/html"); 
			PrintWriter out = response.getWriter();  
			
			// Create a session object
			HttpSession session = request.getSession();
			     
			out.println(" Session Id:"+session.getId()+"<br>");
			visits++;

			out.println("No of hits = "+visits);
			      
        }catch(Exception e){System.out.println(e);}  
    }  
      
}  