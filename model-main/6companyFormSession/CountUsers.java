
import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;

public class CountUsers extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        PrintWriter pw = response.getWriter();
        response.setContentType("text/html");
        HttpSession session = request.getSession();
        Integer cnt = (Integer)session.getAttribute("cnt");
        pw.println("Count: "+cnt);
    }
}