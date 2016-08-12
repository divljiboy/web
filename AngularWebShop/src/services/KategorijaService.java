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
import beans.Kategorija;
import beans.KategorijaSer;


@Path("/kategorija")
public class KategorijaService {
	

	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;

	KategorijaSer kategorije;

	@POST
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String add(Kategorija p) {
		List<Kategorija> trenutna = getProducts();

		System.out.println(trenutna.size());
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
		System.out.println(trenutna.size());
		

		ctx.setAttribute("kategorije", trenutna);
		kategorije.serijalizuj(trenutna);
		return "OK";
	}

	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Kategorija> getKategorije() {
		return getProducts();

	}

	@POST
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("id") int sifra) {
		List<Kategorija> trenutna = getProducts();
		System.out.println(trenutna.size());
		for (int i = 0; i < trenutna.size(); i++) {
			if (trenutna.get(i).getSifra() == sifra) {
				trenutna.remove(i);
				break;
			}
		}
		System.out.println(trenutna.size());
		ctx.setAttribute("kategorije", trenutna);
		kategorije.serijalizuj(trenutna);

		return "ok";
	}

	@PUT
	@Path("/edit")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String putKategorija(Kategorija p) {
		System.out.println(p.getSifra());
		List<Kategorija> trenutna = getProducts();
		for (int i = 0; i < getProducts().size(); i++) {

			if (getProducts().get(i).getSifra() == p.getSifra()) {
				System.out.println("from loop " + p.getSifra());
				trenutna.set(i, p);
				break;

			}
		}
		kategorije.serijalizuj(trenutna);
		ctx.setAttribute("kategorije", kategorije.getLista());

		return "ok";
	}

	private List<Kategorija> getProducts() {
		kategorije = new KategorijaSer();
		ctx.setAttribute("kategorije", kategorije.getLista());

		return kategorije.getLista();
	}


}
