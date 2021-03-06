package beans;

import java.awt.Image;
import java.io.Serializable;
import java.util.Date;

/** @pdOid 9ddc6c83-56b1-497b-8cad-54aeb6aa4c07 */
public class Proizvod implements Serializable {

	/** @pdOid bea497f1-27a0-4a43-a8f6-6343fa499d23 */
	private int sifra;
	/** @pdOid 484151a4-f734-419b-ac6a-a9f42b9d7c96 */
	private String naziv;
	/** @pdOid 9d38aed0-89ec-4e75-b68a-5f78170723fa */
	private String boja;
	/** @pdOid f3b42150-0b33-4a40-84b3-2078c6e44245 */
	private Float dimenzija;
	/** @pdOid 6f089cc3-0e05-4233-80c2-dc93a874836c */
	private int tezina;
	/** @pdOid 5d2f76e2-5e37-4d4a-b498-a3a741f24868 */
	private String zemlja;
	/** @pdOid bf67414b-ce48-4c3a-af37-411b5ae14431 */
	private Float cena;
	/** @pdOid 29cbfe20-2cd9-4d02-a381-2a43ce5105f5 */
	private int kolicina;
	/** @pdOid 5de598aa-cac1-428d-8e0c-50a821f0d439 */
	  private int srednjaOcena ;
	  
	private Boolean akcija = false;
	
	private Float cenaBezAkcije;
	
	private Date datumPocetka;
	
	private Date datumKraja;
	   
	private Boolean akcijaZaPrikaz = false;
	
	private Float akcijskaCena;
	 private int brojOcenjivnja = 0;
	 private int ocenaKomentara = 0;
	
   /** @pdOid 153b8797-5d50-4022-921e-8866e28157f7 */
   //private Image slika;
   /** @pdOid ea7759f6-8136-4d13-ab42-ff3edc3c4f7f */
   //private Kategorija kategorija;
   private Prodavnica prodavnica;
   private Kategorija kategorija;
   
   public Kategorija getKategorija() {
	return kategorija;
}


public void setKategorija(Kategorija kategorija) {
	this.kategorija = kategorija;
}


public java.util.List<Recenzija> getRecenzija() {
	return recenzija;
}


public void setRecenzija(java.util.List<Recenzija> recenzija) {
	this.recenzija = recenzija;
}


public Prodavnica getProdavnica() {
	return prodavnica;
}


public void setProdavnica(Prodavnica prodavnica) {
	this.prodavnica = prodavnica;
}

/** @pdRoleInfo migr=no name=Recenzija assc=association2 coll=java.util.List impl=java.util.ArrayList mult=0..* side=A */
   public java.util.List<Recenzija> recenzija;
   
   /** @pdOid 037aae77-1680-44bf-b6ef-da57d83a43bc */
   public int getSifra() {
      return sifra;
   }
   
   /** @param newSifra
    * @pdOid 0a1b4629-a384-4ac3-b875-dc71eb9fd2ae */
   public void setSifra(int newSifra) {
      sifra = newSifra;
   }
   
   
   public String getNaziv() {
	return naziv;
}

public void setNaziv(String naziv) {
	this.naziv = naziv;
}




	

	public String getBoja() {
		return boja;
	}

public Float getDimenzija() {
	return dimenzija;
}



public void setBoja(String boja) {
		this.boja = boja;
	}

public void setDimenzija(Float dimenzije) {
	this.dimenzija = dimenzije;
}


public int getTezina() {
	return tezina;
}

public void setTezina(int tezina) {
	this.tezina = tezina;
}

public String getZemlja() {
	return zemlja;
}

public void setZemlja(String zemlja) {
	this.zemlja = zemlja;
}

public Float getCena() {
	return cena;
}

public void setCena(Float cena) {
	this.cena = cena;
}

public int getKolicina() {
	return kolicina;
}

public void setKolicina(int kolicina) {
	this.kolicina = kolicina;
}




public int getSrednjaOcena() {
	return srednjaOcena;
}


public void setSrednjaOcena(int srednjaOcena) {
	this.srednjaOcena = srednjaOcena;
}


public int getBrojOcenjivnja() {
	return brojOcenjivnja;
}


public void setBrojOcenjivnja(int brojOcenjivnja) {
	this.brojOcenjivnja = brojOcenjivnja;
}


public int getOcenaKomentara() {
	return ocenaKomentara;
}


public void setOcenaKomentara(int ocenaKomentara) {
	this.ocenaKomentara = ocenaKomentara;
}


public Boolean getAkcija() {
	return akcija;
}


public void setAkcija(Boolean akcija) {
	this.akcija = akcija;
}


public Float getCenaBezAkcije() {
	return cenaBezAkcije;
}


public void setCenaBezAkcije(Float cenaBezAkcije) {
	this.cenaBezAkcije = cenaBezAkcije;
}


public Date getDatumPocetka() {
	return datumPocetka;
}


public void setDatumPocetka(Date datumPocetka) {
	this.datumPocetka = datumPocetka;
}


public Date getDatumKraja() {
	return datumKraja;
}


public void setDatumKraja(Date datumKraja) {
	this.datumKraja = datumKraja;
}


public Float getAkcijskaCena() {
	return akcijskaCena;
}


public void setAkcijskaCena(Float akcijskaCena) {
	this.akcijskaCena = akcijskaCena;
}


public Boolean getAkcijaZaPrikaz() {
	return akcijaZaPrikaz;
}


public void setAkcijaZaPrikaz(Boolean akcijaZaPrikaz) {
	this.akcijaZaPrikaz = akcijaZaPrikaz;
}


/** @pdGenerated default getter */
   
   
  
}