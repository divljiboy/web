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
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String add(Dostavljac p) {
		List<Dostavljac> trenutna = getProducts();

		for (int i = 0; i < trenutna.size(); i++) {

			if (trenutna.get(i).getNaziv().equals(p.getNaziv())) {
				return "error";
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
		return "OK";
	}

	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Dostavljac> getDostavljaci() {
		return getProducts();

	}

	@POST
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("id") int sifra) {
		List<Dostavljac> trenutna = getProducts();
		System.out.println(trenutna.size());
		for (int i = 0; i < trenutna.size(); i++) {
			if (trenutna.get(i).getSifra() == sifra) {
				trenutna.remove(i);
				break;
			}
		}
		System.out.println(trenutna.size());
		ctx.setAttribute("dostavljaci", trenutna);
		dostavljaci.serijalizuj(trenutna);

		return "ok";
	}

	@PUT
	@Path("/edit")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String putDostavljac(Dostavljac p) {
		System.out.println(p.getSifra());
		List<Dostavljac> trenutna = getProducts();
		for (int i = 0; i < getProducts().size(); i++) {

			if (getProducts().get(i).getSifra() == p.getSifra()) {
				System.out.println("from loop " + p.getSifra());
				trenutna.set(i, p);
				break;

			}
		}
		dostavljaci.serijalizuj(trenutna);
		ctx.setAttribute("dostavljaci", dostavljaci.getLista());

		return "ok";
	}

	private List<Dostavljac> getProducts() {
		dostavljaci = new DostavljacSer();
		ctx.setAttribute("dostavljaci", dostavljaci.getLista());

		return dostavljaci.getLista();
	}

}
