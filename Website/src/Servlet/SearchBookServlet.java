package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.Connection;

import entity.BookVO;
import net.sf.json.JSONArray;

public class SearchBookServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 570382429656517490L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        request.setCharacterEncoding("utf-8");  
        response.setContentType("text/html;charset=utf-8");  
        PreparedStatement stmt=null;ResultSet rs=null;
        Connection con=null;
         try{
        	 String driver ="com.mysql.jdbc.Driver";  
             String url ="jdbc:mysql://localhost:3306/test2?characterEncoding=UTF-8";  
             String user ="root";  
             String pass="123456";
             String sql=null;
             Class.forName(driver);  
             con = (Connection) DriverManager.getConnection(url, user, pass);  
             Integer pageSize=10;
             Integer pageNumber=0;
             Integer userid=(Integer) request.getSession().getAttribute("userid");       
             String key=request.getParameter("keyword");
             if(request.getParameter("pageNumber")!=null) pageNumber=Integer.valueOf(request.getParameter("pageNumber"));
             if(key==null) return;
             else if(key.equals("科幻")||key.equals("言情")||key.equals("玄幻")||key.equals("纯爱")||key.equals("灵异")){
            	 int k=1;         
            		 sql = "select books.*,r.iscollect,r.dislike,r.read from books left join (select* from records where userid=? or userid is null )as  r on books.id=r.itemid where books.tag like ?  limit ?,?";	 
            		 stmt=con.prepareStatement(sql);           	 
            		 stmt.setInt(k, userid);
            		 k++;
            	
            	 key="%"+key+"%";
                 stmt.setString(k++, key);
                 stmt.setInt(k++, pageNumber*pageSize);
                 stmt.setInt(k++, pageSize);
                 rs=stmt.executeQuery();
             }
             else {
            	  int k=1;
         		 String bookname="%"+key+"%";       	        
             		 sql = "select books.*,r.iscollect,r.dislike,r.read from books left join (select* from records where userid=? or userid is null )as  r on books.id=r.itemid where  bookname like ? or author like ? limit ?,?";	           
             		 stmt=con.prepareStatement(sql);
             		 stmt.setInt(k++, userid);            
             		 stmt.setString(k++, bookname);
             		 stmt.setString(k++, bookname);
             		 stmt.setInt(k++, pageNumber*pageSize);
             		 stmt.setInt(k++, pageSize);
            	 	rs=stmt.executeQuery();             	 
             }
             List<BookVO> books=new ArrayList<BookVO>();
             while(rs.next()){
            	 BookVO book=new BookVO();
            	 book.setId(rs.getInt(1));
            	 book.setSummary(rs.getString(2));
            	 book.setBookname(rs.getString(3));
            	 book.setAuthor(rs.getString(4));
            	 book.setUrl(rs.getString(5));
            	 book.setTag(rs.getString(6));
            	 book.setIscollect(rs.getInt(7));
            	 book.setDislike(rs.getInt(8));
            	 book.setRead(rs.getInt(9));
            	 books.add(book);         	 
             }
            PrintWriter pw=response.getWriter();
            JSONArray jsonArray=JSONArray.fromObject(books);
           pw.print(jsonArray.toString());
         }catch (ClassNotFoundException e) {  
             e.printStackTrace();  
         } catch (SQLException e) {  
             e.printStackTrace();  
         }finally {  
             try {  
                 if(stmt!=null)stmt.close();  
                 if(con!=null)con.close();  
                 }   
             	catch (SQLException e){          
                }  
         }  
    }  

}
