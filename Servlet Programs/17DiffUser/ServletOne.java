import java.io.*;
//import javax.servlet.*;
//import javax.servlet.http.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.Date; 

//Number of hit for a web page      
public class ServletOne extends HttpServlet {  
@Override
public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		int clickCount;
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		
		//get the session, which contains user-specific data
		HttpSession session = request.getSession();
		
		if(session.getAttribute("clickCount") != null){
			//we've already stored the clickCount in a previous request, so get it
			clickCount = (int) session.getAttribute("clickCount");
		}
		else{
			//we haven't stored the clickCount for this user yet, start it at zero
			clickCount = 0;
		}
		
		clickCount++;
		
		//store the new clickCount in the session
		session.setAttribute("clickCount", clickCount);
		
		//output the sessionID, clickCount for this user
		pw.println(" Session Id:"+session.getId()+"<br>");
		pw.println("<h1>You clicked the button " + clickCount + " times.</h1>");
	}	
}