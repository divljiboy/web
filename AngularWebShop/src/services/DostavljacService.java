package services;

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

import beans.Dostavljac;
import beans.DostavljacSer;

@Path("/dostavljac")
public class DostavljacService {

	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;

	DostavljacSer dostavljaci;

	@POST
	@Path("/addDostavljac")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(Dostavljac p) {
		List<Dostavljac> trenutna = getProducts();

		for (int i = 0; i < trenutna.size(); i++) {

			if (trenutna.get(i).getNaziv().equals(p.getNaziv())) {
				return Response.status(404).build();
			}
		}
		if (trenutna.size() == 0) {
			p.setSifra(1);
		} else {
			p.setSifra(trenutna.get(trenutna.size() - 1).getSifra() + 1);
		};

		trenutna.add(p);

		ctx.setAttribute("dostavljaci", trenutna);
		dostavljaci.serijalizuj(trenutna);
		return Response.status(200).build();
		
	}

	@GET
	@Path("/getDostavljac")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Dostavljac> getDostavljaci() {
		return getProducts();

	}

	@POST
	@Path("/deleteDostavljac/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") int sifra) {
		List<Dostavljac> trenutna = getProducts();
		System.out.println(trenutna.size());
		int a= trenutna.size();
		for (int i = 0; i < trenutna.size(); i++) {
			if (trenutna.get(i).getSifra() == sifra) {
				trenutna.remove(i);
				break;
			}
		}
		int b= trenutna.size();
		
		System.out.println(trenutna.size());
		ctx.setAttribute("dostavljaci", trenutna);
		dostavljaci.serijalizuj(trenutna);
		if(a>b)
		{
			return Response.status(200).build();
		}else
		{
			return Response.status(404).build();
			
		}
		

		
	}

	@PUT
	@Path("/editDostavljac")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response putDostavljac(Dostavljac p) {
		List<Dostavljac> trenutna = getProducts();
		for (int i = 0; i < getProducts().size(); i++) {

			if (getProducts().get(i).getSifra() == p.getSifra()) {
				trenutna.set(i, p);
				break;
				

			}
		}
		
		dostavljaci.serijalizuj(trenutna);
		ctx.setAttribute("dostavljaci", dostavljaci.getLista());

		return Response.status(200).build();
	}

	private List<Dostavljac> getProducts() {
		dostavljaci = new DostavljacSer();
		ctx.setAttribute("dostavljaci", dostavljaci.getLista());

		return dostavljaci.getLista();
	}

}
