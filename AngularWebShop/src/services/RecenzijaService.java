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

import org.json.simple.JSONObject;

import beans.Proizvod;
import beans.ProizvodSer;
import beans.Recenzija;
import beans.RecenzijaSer;

@Path("/recenzija")
public class RecenzijaService {
	

	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	RecenzijaSer recenzije;
	
	
	@POST
	@Path("/addRecenzija")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(Recenzija p) {
		List<Recenzija> trenutna=getData();
		
		for(int i = 0;i < trenutna.size(); i++){
			
			if(trenutna.get(i).getSifra()==(p.getSifra()) ){
				return Response.status(404).build();
			}
		}


		if (trenutna.size() == 0) {
			p.setSifra(1);
		} else {
			p.setSifra(trenutna.get(trenutna.size() - 1).getSifra() + 1);
		};


		trenutna.add(p);
		
		
		
		ctx.setAttribute("recenzije", trenutna);
		recenzije.serijalizuj(trenutna);
		return Response.ok().build();
		
	}
	@GET
	@Path("/getRecenzija")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Recenzija> getRecenzije(){
		return getData();
		
	}
	
	@GET
	@Path("/getRecenzijaProizvod/{proizvod}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Recenzija> getRecenzijeProizvod(@PathParam("proizvod") int proizvod){
		ArrayList<Recenzija> listaproizvoda = new ArrayList<Recenzija>() ;
		for(int i =0; i < getData().size();i++){
			
			if(getData().get(i).getProizvod().getSifra() == proizvod){
				listaproizvoda.add(getData().get(i));
			}
		}
		return listaproizvoda;
		
	}
	
	
	@GET
	@Path("/getRecenzijaByProduct/{proizvod}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Recenzija> getRecenzijaByProduct(@PathParam("proizvod") String proizvod){
		ArrayList<Recenzija> listaproizvoda = new ArrayList<Recenzija>() ;
		for(int i =0; i < getData().size();i++){
			
			if(getData().get(i).getProizvod().getNaziv().equals(proizvod)){
				listaproizvoda.add(getData().get(i));
			}
		}
		return listaproizvoda;
		
	}
	@POST
	@Path("/deleteRecenzija/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") int sifra) {
		List<Recenzija> trenutna=getData();
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
		ctx.setAttribute("recenzije", trenutna);
		recenzije.serijalizuj(trenutna);
		int b= trenutna.size();
		
		
		if(a>b)
		{
			return Response.status(200).build();
		}else
		{
			return Response.status(404).build();
			
		}
		
		
		
	}
	
	@POST
	@Path("/ocenjivanje/{ocena}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject ocenjivanje(Recenzija recenzija,@PathParam("ocena") int ocena) {
		List<Recenzija> trenutna=getData();
		JSONObject obj = new JSONObject();
		for(int i = 0; i<trenutna.size();i++){
			if(trenutna.get(i).getSifra()==recenzija.getSifra()){
				int prom =trenutna.get(i).getBrojOcenjivnja() +1;
				trenutna.get(i).setBrojOcenjivnja(prom);
				 trenutna.get(i).setSrednjaOcena(trenutna.get(i).getSrednjaOcena()+ocena);
				int novaOcena = ( trenutna.get(i).getSrednjaOcena()) / prom;
				trenutna.get(i).setOcenaKomentara(novaOcena);;
				
			}
		}
		
		ctx.setAttribute("recenzije", trenutna);
		recenzije.serijalizuj(trenutna);
		return (JSONObject) obj.put("status", "ok") ;
	}

	
	
	
	@PUT
	@Path("/editRecenzija")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response putRecenzija(Recenzija p){
		System.out.println(p.getSifra());
		List<Recenzija> trenutna=getData();
	   for(int i=0;i<getData().size();i++){
		  
		  if(getData().get(i).getSifra() == p.getSifra()){
			  System.out.println("from loop " + p.getSifra()); 
			  trenutna.set(i, p);break;
			  
		  }
	   }
	   recenzije.serijalizuj(trenutna);
	   ctx.setAttribute("recenzije", recenzije.getLista());
		
	   return Response.status(200).build();
	  
	}
	
	private List<Recenzija> getData() {
		recenzije= new RecenzijaSer();
		ctx.setAttribute("recenzije", recenzije.getLista());
	
		return   recenzije.getLista();
	}
	

}
