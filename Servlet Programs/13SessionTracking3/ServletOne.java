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
			HttpSession session = request.getSession(true);
			// Get session creation time.
			Date createTime = new Date(session.getCreationTime());
			//Get last access time of this web page.
			Date lastAccessTime = new Date(session.getLastAccessedTime());     
     
			out.println(" Session Id:"+session.getId()+"\n");
			out.println("Date of session creation:"+createTime+"\n");
			out.println("Last Accessed Time:"+lastAccessTime);
      
        }catch(Exception e){System.out.println(e);}  
    }  
      
}  