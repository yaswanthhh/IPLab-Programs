import java.io.*;
//import javax.servlet.*;
//import javax.servlet.http.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

      
public class ServletOne extends HttpServlet {  
      
public void doGet(HttpServletRequest request, HttpServletResponse response){  
        try{  
      
            response.setContentType("text/html");  
            PrintWriter out = response.getWriter();  
              
            String n=request.getParameter("userName");  
            out.print("Welcome "+n);  
              
            HttpSession session=request.getSession();  
            session.setAttribute("uname",n);  
      
            out.print("<br><br><a href='Se2'>Go To 2nd Sevlet</a>");  
                      
            out.close();  
      
        }catch(Exception e){System.out.println(e);}  
    }  
      
}  