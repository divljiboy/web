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
import javax.ws.rs.core.Response.ResponseBuilder;

import beans.ShopSer;
import beans.Prodavnica;
import beans.Proizvod;


@Path("/shop")
public class ShopService {
	
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	ShopSer shop;
	
	
	@POST
	@Path("/addShop")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ResponseBuilder add(Prodavnica p) {
		List<Prodavnica> trenutna=getShops();
		
		for(int i = 0;i < trenutna.size(); i++){
			
			if(trenutna.get(i).getNaziv().equals(p.getNaziv())){
				return Response.status(404);
			}
		}
		
		if (trenutna.size() == 0) {
			p.setSifra(1);
		} else {
			p.setSifra(trenutna.get(trenutna.size() - 1).getSifra() + 1);
		}

		trenutna.add(p);
		ctx.setAttribute("shopovi", trenutna);
		shop.serijalizuj(trenutna);
		return Response.status(200);
	}
	
	@GET
	@Path("/getShop")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Prodavnica> getProdavnica(){
		return getShops();
		
	}
	@GET
	@Path("/getShopByName/{shop}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Prodavnica getShop(@PathParam("shop") String shop){
		List<Prodavnica> trenutna = getShops();
		for(int i =0;i<trenutna.size();i++){
			if(trenutna.get(i).getNaziv().equals(shop))
				return trenutna.get(i);
		}
		return null;
		
		
	}
	@POST
	@Path("/deleteShop/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ResponseBuilder delete(@PathParam("id") int sifra) {
		List<Prodavnica> trenutna=getProdavnica();
		int a= trenutna.size();
		
		for(int i=0;i<=trenutna.size()-1;i++)
		{
			if(trenutna.get(i).getSifra()==sifra)
			{
				trenutna.remove(i);
				break;
			}
		}
		int b= trenutna.size();
		
		ctx.setAttribute("shopovi", trenutna);
		shop.serijalizuj(trenutna);
		
		if(a>b)
		{
			return Response.status(200);
		}else
		{
			return Response.status(404);
			
		}
	}

	
	
	@PUT
	@Path("/editShop")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ResponseBuilder putProizvod(Prodavnica p){
		System.out.println(p.getSifra());
		List<Prodavnica> trenutna=getProdavnica();
	   for(int i=0;i<trenutna.size();i++){
		  
		  if(getProdavnica().get(i).getSifra() == p.getSifra()){
			  System.out.println("from loop " + p.getSifra()); 
			  trenutna.set(i, p);break;
			  
		  }
	   }
	   shop.serijalizuj(trenutna);
	   ctx.setAttribute("shopovi", shop.getLista());
		
	   
	   return Response.status(200);
	}
	
	private List<Prodavnica> getShops() {
		shop = new ShopSer();
		ctx.setAttribute("shop", shop.getLista());
	
		return shop.getLista();
	}

}
