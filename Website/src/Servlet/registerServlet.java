package Servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class registerServlet extends HttpServlet{
	
    public void doPost(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        request.setCharacterEncoding("utf-8");  
        response.setContentType("text/html;charset=utf-8");  
        String email = request.getParameter("email");  
        String password = request.getParameter("password");  
        String username = request.getParameter("username");
        PreparedStatement stmt=null;
        int rs=-1;
		Connection con=null;	
         try{
        	 String driver ="com.mysql.jdbc.Driver";  
             String url ="jdbc:mysql://localhost:3306/test2";  
             String user ="root";  
             String pass="123456";
             Class.forName(driver);  
             con = DriverManager.getConnection(url, user, pass);  
             String sql = "insert into user(username,password,email) values(?,?,?)"; 
             stmt=con.prepareStatement(sql);
             stmt.setString(1, username);
             stmt.setString(2, password);
             stmt.setString(3, email); 
             rs=stmt.executeUpdate();  
             if(rs<0){
            	 request.setAttribute("msg", "ע��ʧ��");  
                 response.sendRedirect("/display/begin.jsp");
            	 return;  
             }            
             if(rs>=0){              	
                 request.setAttribute("msg", "�û�"+email+",ע��ɹ�");                  
                 response.sendRedirect("/display/begin.jsp");
               return;
               
             }  
            	 
         }catch (ClassNotFoundException e) {  
             e.printStackTrace();  
         } catch (SQLException e) {  
             e.printStackTrace();  
         }finally {  
             try {  
                 if(stmt!=null)stmt.close();  
                 if(con!=null)con.close();  
                 }   
             	catch (SQLException e) {          
                }  
         }  
    }  
  
}
