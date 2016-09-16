package beans;

import java.io.Serializable;
import java.util.ArrayList;

public class Zelja implements Serializable {
	
	private String Korisnik;
	
	private ArrayList<Proizvod> proizvodi = new ArrayList<Proizvod>();

	public String getKorisnik() {
		return Korisnik;
	}

	public void setKorisnik(String korisnik) {
		Korisnik = korisnik;
	}

	public ArrayList<Proizvod> getProizvodi() {
		return proizvodi;
	}

	public void setProizvodi(ArrayList<Proizvod> proizvodi) {
		this.proizvodi = proizvodi;
	}
}
