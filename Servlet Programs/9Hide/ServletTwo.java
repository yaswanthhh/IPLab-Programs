import java.io.*;  
//import javax.servlet.*;  
//import javax.servlet.http.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class ServletTwo extends HttpServlet {  
public void doGet(HttpServletRequest request, HttpServletResponse response){  
        try{  
            response.setContentType("text/html");  
            PrintWriter out = response.getWriter();  
              
            //Getting the value from the hidden field  
            String n=request.getParameter("uname");  
            out.print("Hello "+n);  
      
            out.close();  
                    }catch(Exception e){System.out.println(e);}  
    }  
}  