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

import org.json.simple.JSONObject;

import beans.IstorijaKupovine;
import beans.IstorijaKupovineSer;
import beans.Proizvod;
import beans.Zalba;
import beans.Zelja;
import beans.ZeljaSer;

@Path("zelja")
public class ZeljaService {
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	ZeljaSer zelja;
	
	@POST
	@Path("/addZelja/{korisnik}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject add(Proizvod p,@PathParam("korisnik") String korisnik) {
		List<Zelja> trenutna=getZelja();
	
		JSONObject obj = new JSONObject();
		int kojiKorisnik = 0;
		for(int i = 0; i < trenutna.size();i++){
			if(trenutna.get(i).getKorisnik().equals(korisnik)){
				kojiKorisnik = i;
				for(int k=0 ;k <trenutna.get(i).getProizvodi().size();k++){
					if(trenutna.get(i).getProizvodi().get(k).getNaziv().equals(p.getNaziv())){
						System.out.println("saki");
						return (JSONObject) obj.put("status", "dodat vec proizvod u listu zelja");
					}
				}
				
			}
		}
		Zelja zelja1 = new Zelja();
		System.out.println("zelja " + kojiKorisnik);
		zelja1.setKorisnik(korisnik);
		if(kojiKorisnik == 0){
			ArrayList<Proizvod> pro = new ArrayList<>();
			pro.add(p);
			zelja1.setProizvodi(pro);
		}else{
			System.out.println("dodao zelja1");
			ArrayList<Proizvod> pro = trenutna.get(kojiKorisnik).getProizvodi();
			pro.add(p);
			zelja1.setProizvodi(pro);
		}
	
		trenutna.add(zelja1);
		ctx.setAttribute("zelja",trenutna);
		zelja.serijalizuj(trenutna);
		return (JSONObject) obj.put("status", "dodato");
		
	
	}
	
	@GET
	@Path("/getZelja/{korisnik}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ArrayList<Proizvod> get(@PathParam("korisnik") String korisnik) {
		List<Zelja> trenutna=getZelja();
		
		JSONObject obj = new JSONObject();
		for(int i=0;i<trenutna.size();i++){
			if(trenutna.get(i).getKorisnik().equals(korisnik)){
				System.out.println("Zelje get");
				return trenutna.get(i).getProizvodi();
			}
		}
		return (ArrayList<Proizvod>) obj.put("status", "prazan");
		
	}
	
	
	private ArrayList<Zelja> getZelja() {
		zelja = new ZeljaSer();
		ctx.setAttribute("zelja", zelja.getLista());
	
		return (ArrayList<Zelja>) zelja.getLista();
	}
}
