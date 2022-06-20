import java.io.*;  
import jakarta.servlet.*;
import jakarta.servlet.http.*;  
  
  
public class ServletOne extends HttpServlet {  
  
public void doGet(HttpServletRequest request, HttpServletResponse response){  
        try{  
  
        response.setContentType("text/html");  
        PrintWriter out = response.getWriter();  
          
        String n=request.getParameter("userName");  
        out.print("Welcome "+n);  
  
        //appending the username in the query string  
        out.println("<a href='Se2?uname="+n+" '> Go to Servlet 2</a>");  
                  
        out.close();  
  
                }catch(Exception e){System.out.println(e);}  
    }  
  
}