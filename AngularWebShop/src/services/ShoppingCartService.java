package services;

import java.util.ArrayList;
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
import beans.IstorijaKupovineSer;
import beans.Kupovina;
import beans.KupovinaSer;
import beans.Prodavnica;
import beans.Proizvod;


@Path("/shoppingCart")
public class ShoppingCartService {
	
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	KupovinaSer kupovina;
	IstorijaKupovineSer istorijaKupovine;
	@POST
	@Path("/add/{kolicina}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String addKupovina(Proizvod p,@PathParam("kolicina") int kolicina) {
		List<Kupovina> trenutnaKupovina=getKupovina();
	
		Kupovina kupljeno = new Kupovina();
		kupljeno.setProizvod(p);
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
		return "OK";
	}
	@POST
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("id") int sifra) {
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
		
		return "ok";
	}
	@POST
	@Path("/deleteAll")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete() {
		List<Kupovina> trenutna=getKupovina();
		trenutna.clear();
		System.out.println(trenutna.size());
		ctx.setAttribute("kupovina", trenutna);
		kupovina.serijalizuj(trenutna);
		
		return "ok";
	}
	@POST
	@Path("/addAllToHistory")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String addAll(List<Kupovina> kupljeno) {
		System.out.println(kupljeno.get(1).getCena());
		ArrayList<ArrayList<Kupovina>> trenutna =getIstrijaKupovina();

		
		System.out.println("serilizuj");

		trenutna.add((ArrayList<Kupovina>) kupljeno);
		System.out.println(trenutna.size());
		ctx.setAttribute("istorijaKupovine", trenutna);
		istorijaKupovine.serijalizuj(trenutna);
		
		return "ok";
	}
	
	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Kupovina> getAllKupovina(){
		return getKupovina();
		
	}
	

	private List<Kupovina> getKupovina() {
		kupovina = new KupovinaSer();
		ctx.setAttribute("kupovina", kupovina.getLista());
	
		return   kupovina.getLista();
	}
	
	private ArrayList<ArrayList<Kupovina>> getIstrijaKupovina() {
		istorijaKupovine = new IstorijaKupovineSer();
		ctx.setAttribute("istrijaKupovina", istorijaKupovine.getLista());
	
		return   istorijaKupovine.getLista();
	}
	
	
}
