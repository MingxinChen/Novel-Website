package Servlet;

import java.io.IOException;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.Connection;

public class ReadServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@SuppressWarnings("resource")
	public void doPost(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        request.setCharacterEncoding("utf-8");  
        response.setContentType("text/html;charset=utf-8");  
         Integer userid=(Integer) request.getSession().getAttribute("userid");
         Integer itemid=Integer.valueOf(request.getParameter("itemid"));
         String oper=request.getParameter("type"); 
        PreparedStatement stmt=null;ResultSet rs=null;
        Connection con=null;
         try{
        	 String driver ="com.mysql.jdbc.Driver";  
             String url ="jdbc:mysql://localhost:3306/test2";  
             String user ="root";  
             String pass="123456";
             Class.forName(driver);  
             con = (Connection) DriverManager.getConnection(url, user, pass);  
             String sql = "select* from records where userid=? and itemid=?"; 
             stmt=con.prepareStatement(sql);
             stmt.setInt(1, userid);
             stmt.setInt(2, itemid);
             rs=stmt.executeQuery();
             if(rs.next()) {
            	 if(oper.equals("read"))
            	 sql="update records set read=1 where userid=? and itemid=?";
            	 if(oper.equals("delete-read"))
            	sql="update records set read=0 where userid=? and itemid=?"; 
            	 stmt=con.prepareStatement(sql);
            	 stmt.setInt(1, userid);
                 stmt.setInt(2, itemid);
            	 stmt.executeUpdate();
             }
             else{
            	 sql="insert records (userid,itemid,read) values(?,?,1)";
            	 stmt=con.prepareStatement(sql);
            	 stmt.setInt(1, userid);
                 stmt.setInt(2, itemid);
            	 stmt.executeUpdate();
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
