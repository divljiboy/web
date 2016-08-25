package beans;

import java.io.Serializable;

public class Zalba implements Serializable {

	private int sifra;
	
	private int sifraProizvoda;
	
	private int sifraKupovine;
	
	private String naziv;

	private String text;

	private String korisnik;
	
	public int getSifra() {
		return sifra;
	}

	public void setSifra(int sifra) {
		this.sifra = sifra;
	}

	public int getSifraProizvoda() {
		return sifraProizvoda;
	}

	public void setSifraProizvoda(int sifraProizvoda) {
		this.sifraProizvoda = sifraProizvoda;
	}

	public int getSifraKupovine() {
		return sifraKupovine;
	}

	public void setSifraKupovine(int sifraKupovine) {
		this.sifraKupovine = sifraKupovine;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getKorisnik() {
		return korisnik;
	}

	public void setKorisnik(String korisnik) {
		this.korisnik = korisnik;
	}
	
	
	
}
