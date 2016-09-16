package services;

import java.util.ArrayList;
import java.util.Date;
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

import org.json.simple.JSONObject;

import beans.ProductToAdd;
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
		List<Proizvod> trenutna=getProducts();
		Date date = new Date();
		for(int i=0;i< trenutna.size();i++){
			if(trenutna.get(i).getAkcija()==true){
				System.out.println(trenutna.get(i).getDatumPocetka() + " "+ trenutna.get(i).getDatumKraja());
				if (  date.after(trenutna.get(i).getDatumPocetka()) && date.before(trenutna.get(i).getDatumKraja())){
					
					trenutna.get(i).setCenaBezAkcije(trenutna.get(i).getCena());
					trenutna.get(i).setCena(trenutna.get(i).getAkcijskaCena());
					trenutna.get(i).setCenaBezAkcije(trenutna.get(i).getCenaBezAkcije());
					trenutna.get(i).setAkcijaZaPrikaz(true);
				}else{
					trenutna.get(i).setAkcijaZaPrikaz(false);
					trenutna.get(i).setCena(trenutna.get(i).getCenaBezAkcije());
				}
			}
		}
		ctx.setAttribute("proizvodi", trenutna);
		proizvodi.serijalizuj(trenutna);
		return getProducts();
		
	}
	@GET
	@Path("/getProProdavnica/{shop}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ArrayList<Proizvod> getProProizvodi(@PathParam("shop") String shop){
		
		List<Proizvod> proizvodi = getProducts();
		ArrayList<Proizvod> zaPrikaz = new ArrayList<Proizvod>();
		for(int i = 0;i<proizvodi.size();i++){
		
			if(proizvodi.get(i).getProdavnica().getNaziv().equals(shop)){
		
				zaPrikaz.add(proizvodi.get(i));
			}
		}
		return zaPrikaz;
		
		
	}
	@GET
	@Path("/getProizvodZa/{pro}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Proizvod getProizvod(@PathParam("pro") int num){
		System.out.println(num + "***");
		for(int i = 0;i <getProducts().size();i++){
			System.out.println(getProducts().get(i).getSifra());
			if(getProducts().get(i).getSifra() == num){
				return (getProducts().get(i));
			
			}
		}
		return getProducts().get(num-1);
		
	}
	
	@POST
	@Path("/postOcenu/{ocena}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject addOcenu(Proizvod p,@PathParam("ocena") int ocena) {
		JSONObject obj = new JSONObject();
		List<Proizvod> trenutna=getProducts();
		
		for(int i = 0; i<trenutna.size();i++){
			if(trenutna.get(i).getSifra()==p.getSifra()){
				int prom =trenutna.get(i).getBrojOcenjivnja() +1;
				trenutna.get(i).setBrojOcenjivnja(prom);
				 trenutna.get(i).setSrednjaOcena(trenutna.get(i).getSrednjaOcena()+ocena);
				int novaOcena = ( trenutna.get(i).getSrednjaOcena()) / prom;
				trenutna.get(i).setOcenaKomentara(novaOcena);;
				
			}
		}
		ctx.setAttribute("proizvodi", trenutna);
		proizvodi.serijalizuj(trenutna);
		
		return (JSONObject) obj.put("status", "key");
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

	@POST
	@Path("/akcija")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject akcija(Proizvod pro) {
		List<Proizvod> trenutna=getProducts();
		int a= trenutna.size();
		JSONObject json = new JSONObject();
		
		for(int i=0;i< a;i++){
			if(trenutna.get(i).getSifra() == pro.getSifra()){
				trenutna.set(i, pro);
				break;
			}
		}
		ctx.setAttribute("proizvodi", trenutna);
		proizvodi.serijalizuj(trenutna);

		return (JSONObject) json.put("status", "okej");
		
		
		
	};
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Proizvod> alProizvod(){
		return getProducts();
	}
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
