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

public class ScoreServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8594914007523408198L;
	@SuppressWarnings("resource")
	public void doPost(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        request.setCharacterEncoding("utf-8");  
        response.setContentType("text/html;charset=utf-8");  
         Integer userid=(Integer) request.getSession().getAttribute("userid");
         Integer itemid=Integer.valueOf(request.getParameter("itemid"));
         String oper=request.getParameter("type");
         float score=Float.parseFloat(oper.substring(5)); 
        PreparedStatement stmt=null;ResultSet rs=null;
        Connection con=null;
         try{
        	 String driver ="com.mysql.jdbc.Driver";  
             String url ="jdbc:mysql://localhost:3306/test2";  
             String user ="root";  
             String pass="123456";
             Class.forName(driver);  
             con = (Connection) DriverManager.getConnection(url, user, pass);  
             String sql = "select* from scores where userid=? and itemid=?"; 
             stmt=con.prepareStatement(sql);
             stmt.setInt(1, userid);
             stmt.setInt(2, itemid);
             rs=stmt.executeQuery();
             if(rs.next()) {         
            	 sql="update scores set score=? where userid=? and itemid=?";            	 
            	 stmt=con.prepareStatement(sql);
            	 stmt.setFloat(1, score);
            	 stmt.setInt(2, userid);
                 stmt.setInt(3, itemid);
            	 stmt.executeUpdate();
             }
             else{
            	 sql="insert scores (userid,itemid,score) values(?,?,?)";
            	 stmt=con.prepareStatement(sql);
            	 stmt.setInt(1, userid);
                 stmt.setInt(2, itemid);
                 stmt.setFloat(3, score);
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
