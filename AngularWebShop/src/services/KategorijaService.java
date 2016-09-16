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
	@Path("/addKategorija")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(Kategorija p) {
		List<Kategorija> trenutna = getProducts();

		System.out.println(trenutna.size());
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
		

		ctx.setAttribute("kategorije", trenutna);
		kategorije.serijalizuj(trenutna);
		return Response.ok().build();
	}

	@GET
	@Path("/getKategorija")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<Kategorija> getKategorije() {
		return getProducts();

	}

	@POST
	@Path("/deleteKategorija/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") int sifra) {
		List<Kategorija> trenutna = getProducts();
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
		ctx.setAttribute("kategorije", trenutna);
		kategorije.serijalizuj(trenutna);
		if(a>b)
		{
			return Response.status(200).build();
		}else
		{
			return Response.status(404).build();
			
		}
		
	}

	@PUT
	@Path("/editKategorija")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response putKategorija(Kategorija p) {
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

		return Response.status(200).build();
	}

	private List<Kategorija> getProducts() {
		kategorije = new KategorijaSer();
		ctx.setAttribute("kategorije", kategorije.getLista());

		return kategorije.getLista();
	}


}
