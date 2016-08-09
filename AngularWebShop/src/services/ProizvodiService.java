package services;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.sun.org.apache.xml.internal.security.utils.SignerOutputStream;

import beans.Products;
import beans.Proizvod;
import beans.ProizvodSer;

@Path("/product")
public class ProizvodiService {

	
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	ProizvodSer proizvodi;
	
	
	@POST
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String add(Proizvod p) {
		List<Proizvod> trenutna=getProducts();
		for(int i = 0;i < trenutna.size(); i++){
			
			if(trenutna.get(i).getNaziv().equals(p.getNaziv()) || trenutna.get(i).getSifra() == p.getSifra()){
				return "error";
			}
		}
		trenutna.add(p);
		
		
		ctx.setAttribute("proizvodi", trenutna);
		proizvodi.serijalizuj(trenutna);
		return "OK";
	}
	@GET
	@Path("/getJustProducts")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Proizvod> getProizvodi(){
		return getProducts();
		
	}
	
	@PUT
	@Path("/editProduct")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String putProizvod(Proizvod p){
		List<Proizvod> trenutna=getProducts();
	   for(int i=0;i<getProducts().size();i++){
		  if(getProducts().get(i).getSifra() == p.getSifra()){
			  
			  trenutna.set(i, p);break;
			  
		  }
	   }
	   proizvodi.serijalizuj(trenutna);
	   ctx.setAttribute("proizvodi", proizvodi.getLista());
		
	   
	  return "ok";
	}
	
	private List<Proizvod> getProducts() {
		proizvodi= new ProizvodSer();
		ctx.setAttribute("proizvodi", proizvodi.getLista());
	
		return   proizvodi.getLista();
	}
	

}
