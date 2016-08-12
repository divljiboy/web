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
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String add(Prodavnica p) {
		List<Prodavnica> trenutna=getShops();
		
		for(int i = 0;i < trenutna.size(); i++){
			
			if(trenutna.get(i).getNaziv().equals(p.getNaziv())){
				return "error";
			}
		}
		
		p.setSifra(trenutna.size()+1);
		trenutna.add(p);
		ctx.setAttribute("shop", trenutna);
		shop.serijalizuj(trenutna);
		return "OK";
	}
	
	@GET
	@Path("/getJustShops")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Prodavnica> getProdavnica(){
		return getShops();
		
	}
	
	@PUT
	@Path("/editShop")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String putProizvod(Prodavnica p){
		System.out.println(p.getSifra());
		List<Prodavnica> trenutna=getProdavnica();
	   for(int i=0;i<trenutna.size();i++){
		  
		  if(getProdavnica().get(i).getSifra() == p.getSifra()){
			  System.out.println("from loop " + p.getSifra()); 
			  trenutna.set(i, p);break;
			  
		  }
	   }
	   shop.serijalizuj(trenutna);
	   ctx.setAttribute("proizvodi", shop.getLista());
		
	   
	  return "ok";
	}
	private List<Prodavnica> getShops() {
		shop = new ShopSer();
		ctx.setAttribute("shop", shop.getLista());
	
		return shop.getLista();
	}

}
