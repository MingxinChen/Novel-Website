package test;

import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.Connection;

import entity.BookVO;
import net.sf.json.JSONArray;

public class test {
	@SuppressWarnings("resource")
	public static void main(String []args){
	
         Integer userid=1;
         Integer itemid=1;
         String oper="uncollect"; 
         PreparedStatement stmt=null;ResultSet rs=null;
         Connection con=null;
          try{
         	 String driver ="com.mysql.jdbc.Driver";  
              String url ="jdbc:mysql://localhost:3306/test2?characterEncoding=UTF-8";  
              String user ="root";  
              String pass="123456";
              Class.forName(driver);  
              con = (Connection) DriverManager.getConnection(url, user, pass);  
              Integer pageSize=5;
              Integer pageNumber=0;          
              String tag="都市言情";
              String bookname="%女%";              
          //   String sql = "select books.*,r.iscollect,r.dislike,r.read from books left join (select* from records where userid="+userid+" or userid is null )as  r on books.id=r.itemid where books.tag="+tag+" and books.bookname like  "+bookname;	   
             String sql = "select books.*,r.iscollect,r.dislike,r.read from books left join (select* from records where userid=? or userid is null )as  r on books.id=r.itemid where books.tag=? and books.bookname like ? limit ?,?";	           
        
              stmt=con.prepareStatement(sql);
              
            stmt.setInt(1, userid);
              stmt.setString(2, tag);
             stmt.setString(3, bookname);
            stmt.setInt(4, pageNumber*pageSize);
              stmt.setInt(5, pageSize);
              rs=stmt.executeQuery();
             
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
           
            for(int i=0;i<books.size();i++){
            	JSONArray jsonArray=JSONArray.fromObject(books.get(i));
            	System.out.println(jsonArray.toString());
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
              	catch (SQLException e){          
                 }  
          } 
	}
}
