package services;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Dostavljac;
import beans.IstorijaKupovine;
import beans.IstorijaKupovineSer;
import beans.Kupovina;
import beans.KupovinaSer;
import beans.Prodavnica;
import beans.Proizvod;
 import org.json.simple.JSONObject;

@Path("/shoppingCart")
public class ShoppingCartService {
	
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	KupovinaSer kupovina;
	IstorijaKupovineSer istorijaKupovine;
	
	@POST
	@Path("/add/{kolicina}/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String addKupovina(Proizvod p,@PathParam("kolicina") int kolicina,@PathParam("username") String name) {
		List<Kupovina> trenutnaKupovina=getKupovina();
		JSONObject obj = new JSONObject();
		obj.put("status", "ok");
		
		Kupovina kupljeno = new Kupovina();
		kupljeno.setProizvod(p);
		kupljeno.setKupac(name);
		kupljeno.setKolicina(kolicina);
		kupljeno.setCena(p.getCena());
		if (trenutnaKupovina.size() == 0) {
			
			kupljeno.setSifra(1);
		} else {
			kupljeno.setSifra(trenutnaKupovina.get(trenutnaKupovina.size() - 1).getSifra() + 1);
		};


		trenutnaKupovina.add(kupljeno);
		
		
		ctx.setAttribute("kupovina", trenutnaKupovina);
		kupovina.serijalizuj(trenutnaKupovina);
		return obj.toString();
	}
	
	@POST
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("id") int sifra) {
		JSONObject obj = new JSONObject();
		obj.put("status", "ok");
		List<Kupovina> trenutna=getKupovina();
		System.out.println(trenutna.size());
		for(int i=0;i<trenutna.size();i++)
		{
			if(trenutna.get(i).getSifra()==sifra)
			{
				trenutna.remove(i);
				break;
			}
		}
		System.out.println(trenutna.size());
		ctx.setAttribute("kupovina", trenutna);
		kupovina.serijalizuj(trenutna);
		
		return obj.toString();
	}
	@POST
	@Path("/deleteAll")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete() {
		JSONObject obj = new JSONObject();
		obj.put("status", "ok");
		
		List<Kupovina> trenutna=getKupovina();
		trenutna.clear();
		System.out.println(trenutna.size());
		ctx.setAttribute("kupovina", trenutna);
		kupovina.serijalizuj(trenutna);
		
		return obj.toString();
	}
	@POST
	@Path("/addAllToHistory")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String addAll(ArrayList<Kupovina> kupljeno) {
		
		System.out.println(kupljeno);
		JSONObject obj = new JSONObject();
		obj.put("status", "ok");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
		Date now = new Date();
	    String strDate = sdf.format(now);
	    
	    
		ArrayList<IstorijaKupovine> trenutna =getIstorijaKupovina();
		IstorijaKupovine nova = new IstorijaKupovine();
		
		nova.setIstorijaKup(kupljeno);
		nova.setDateTime(strDate);
		
		if (trenutna.size() == 0) {
			nova.setSifra(1);
		} else {
			nova.setSifra(trenutna.get(trenutna.size() - 1).getSifra() + 1);
		};

		trenutna.add(nova);
		System.out.println(trenutna.size());
		ctx.setAttribute("istorijaKupovine", trenutna);
		istorijaKupovine.serijalizuj(trenutna);
		
		return obj.toString() ;
	}
	
	@GET
	@Path("/get/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Kupovina> getAllKupovina(@PathParam("name") String name){
		List<Kupovina> sveKupovine = getKupovina();
		 ArrayList<Kupovina> zaOdgovarajucegKup = new ArrayList<Kupovina>();
		 
		 for(int i = 0; i<sveKupovine.size();i++){
			 if(sveKupovine.get(i).getKupac().equals(name)){
				 zaOdgovarajucegKup.add(sveKupovine.get(i));
			 }
		 }
		return zaOdgovarajucegKup;
		
	}
	@GET
	@Path("/getAllHistory")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ArrayList<IstorijaKupovine> getAllHistory(){
		return getIstorijaKupovina();
	}

	private List<Kupovina> getKupovina() {
		kupovina = new KupovinaSer();
		ctx.setAttribute("kupovina", kupovina.getLista());
	
		return   kupovina.getLista();
	}
	
	private ArrayList<IstorijaKupovine> getIstorijaKupovina() {
		istorijaKupovine = new IstorijaKupovineSer();
		ctx.setAttribute("istrijaKupovina", istorijaKupovine.getLista());
	
		return   istorijaKupovine.getLista();
	}
	
	
}
