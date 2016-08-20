package services;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

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
	@Path("/addProizvod")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(Proizvod p) {
		List<Proizvod> trenutna=getProducts();
		
		System.out.println(p.getProdavnica().getNaziv());
		for(int i = 0;i < trenutna.size(); i++){
			
			if(trenutna.get(i).getNaziv().equals(p.getNaziv()) ){
				return Response.status(404).build();
			}
		}


		if (trenutna.size() == 0) {
			p.setSifra(1);
		} else {
			p.setSifra(trenutna.get(trenutna.size() - 1).getSifra() + 1);
		};


		trenutna.add(p);
		
		
		
		ctx.setAttribute("proizvodi", trenutna);
		proizvodi.serijalizuj(trenutna);
		return Response.ok().build();
		
	}
	@GET
	@Path("/getProizvod")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Proizvod> getProizvodi(){
		System.out.println("upao sam u backend");
		return getProducts();
		
	}
	@GET
	@Path("/getProductByShop/{shopName}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Proizvod> getProizvodiByShop(@PathParam("shopName") String shopName){
		ArrayList<Proizvod> allProductByShop = new ArrayList<Proizvod>() ;
		for(int i =0; i < getProducts().size();i++){
			
			if(getProducts().get(i).getProdavnica().getNaziv().equals(shopName)){
				System.out.println("idemo");
				allProductByShop.add(getProducts().get(i));
			}
		}
		return allProductByShop;
		
	}
	@POST
	@Path("/deleteProizvod/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") int sifra) {
		List<Proizvod> trenutna=getProducts();
		int a= trenutna.size();
		
		for(int i=0;i<trenutna.size();i++)
		{
			if(trenutna.get(i).getSifra()==sifra)
			{
				trenutna.remove(i);
				break;
			}
		}
		System.out.println(trenutna.size());
		ctx.setAttribute("proizvodi", trenutna);
		proizvodi.serijalizuj(trenutna);
		int b= trenutna.size();
		
		
		if(a>b)
		{
			return Response.status(200).build();
		}else
		{
			return Response.status(404).build();
			
		}
		
		
		
	};


	
	
	
	@PUT
	@Path("/editProizvod")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response putProizvod(Proizvod p){
		System.out.println(p.getSifra());
		List<Proizvod> trenutna=getProducts();
	   for(int i=0;i<getProducts().size();i++){
		  
		  if(getProducts().get(i).getSifra() == p.getSifra()){
			  System.out.println("from loop " + p.getSifra()); 
			  trenutna.set(i, p);break;
			  
		  }
	   }
	   proizvodi.serijalizuj(trenutna);
	   ctx.setAttribute("proizvodi", proizvodi.getLista());
		
	   return Response.status(200).build();
	  
	}
	
	private List<Proizvod> getProducts() {
		proizvodi= new ProizvodSer();
		ctx.setAttribute("proizvodi", proizvodi.getLista());
	
		return   proizvodi.getLista();
	}
	

}
