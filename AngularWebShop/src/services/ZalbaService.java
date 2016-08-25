package services;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.json.simple.JSONObject;

import beans.IstorijaKupovine;
import beans.IstorijaKupovineSer;
import beans.KupovinaSer;
import beans.Prodavnica;
import beans.Recenzija;
import beans.ShopSer;
import beans.Zalba;
import beans.ZalbaSer;

@Path("/zalba")
public class ZalbaService {
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	IstorijaKupovineSer istorijaKupovine;
	
	ZalbaSer zalba;
	
	
	@POST
	@Path("/addZalba")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject add(Zalba p) {
		List<Zalba> trenutna=getZalbe();
		
		JSONObject obj = new JSONObject();
		
		if (trenutna.size() == 0) {
			p.setSifra(1);
		} else {
			p.setSifra(trenutna.get(trenutna.size() - 1).getSifra() + 1);
		}

		trenutna.add(p);
		ctx.setAttribute("zalba", trenutna);
		zalba.serijalizuj(trenutna);
		return (JSONObject) obj.put("status", "ok");
	}
	@POST
	@Path("/postOdbaci")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject odbaci(Zalba p) {
		List<Zalba> trenutna=getZalbe();
		JSONObject obj = new JSONObject();
		
		for(int i=0;i<trenutna.size();i++){
			if(trenutna.get(i).getSifra() == p.getSifra()){
				trenutna.remove(i);
			}
		}
		
		ctx.setAttribute("zalba", trenutna);
		zalba.serijalizuj(trenutna);
		return (JSONObject) obj.put("status", "ok");
	}
	
	@GET
	@Path("/getZalba")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Zalba> getAllZalbe(){
		return getZalbe();
		
	}
	@POST
	@Path("/postZalba")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject postZalbe(Zalba z){
		List<Zalba> zalbe = getZalbe();
		ArrayList<IstorijaKupovine> trenutna = getIstorijaKupovina();
		IstorijaKupovine istorija = new IstorijaKupovine();
		JSONObject obj = new JSONObject();
		
		for(int i=0; i < trenutna.size();i++){
			
			if(trenutna.get(i).getSifra() == z.getSifraKupovine()){
				  istorija = trenutna.get(i);
				  break;
				}
				
			}
		for(int i = 0; i < istorija.getIstorijaKup().size(); i++){
			if(istorija.getIstorijaKup().get(i).getSifra() == z.getSifraProizvoda()){
				istorija.getIstorijaKup().remove(i);
				break;
			}
		}
		
		for(int i=0;i < trenutna.size();i++){
			if(trenutna.get(i).getSifra() == z.getSifraKupovine()){
				trenutna.set(i, istorija);
				break;
			}
		}
		for(int i = 0;i<zalbe.size();i++){
			if(zalbe.get(i).getSifra() == z.getSifra()){
				zalbe.remove(i);
			}
		}
		
		ctx.setAttribute("zalba", zalbe);
		zalba.serijalizuj(zalbe);
		
		ctx.setAttribute("istorijaKupovine", trenutna);
		istorijaKupovine.serijalizuj(trenutna);
		return (JSONObject) obj.put("status", "ok");
		
	}
	
	private List<Zalba> getZalbe() {
		zalba = new ZalbaSer();
		ctx.setAttribute("zalba", zalba.getLista());
	
		return zalba.getLista();
	}
	
	private ArrayList<IstorijaKupovine> getIstorijaKupovina() {
		istorijaKupovine = new IstorijaKupovineSer();
		ctx.setAttribute("istrijaKupovina", istorijaKupovine.getLista());
	
		return   istorijaKupovine.getLista();
	}
}
