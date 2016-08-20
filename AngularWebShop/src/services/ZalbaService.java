package services;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import beans.IstorijaKupovine;
import beans.Prodavnica;
import beans.ShopSer;
import beans.Zalba;
import beans.ZalbaSer;

@Path("/zalba")
public class ZalbaService {
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	ZalbaSer zalba;
	
	
	@POST
	@Path("/addZalba")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String add(Zalba p) {
		List<Zalba> trenutna=getZalbe();
		
		
		
		if (trenutna.size() == 0) {
			p.setSifra(1);
		} else {
			p.setSifra(trenutna.get(trenutna.size() - 1).getSifra() + 1);
		}

		trenutna.add(p);
		ctx.setAttribute("zalba", trenutna);
		zalba.serijalizuj(trenutna);
		return "ook";
	}
	
	private List<Zalba> getZalbe() {
		zalba = new ZalbaSer();
		ctx.setAttribute("zalba", zalba.getLista());
	
		return zalba.getLista();
	}
}
