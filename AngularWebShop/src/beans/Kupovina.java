package beans;

import java.io.Serializable;

/***********************************************************************
 * Module:  Kupovina.java
 * Author:  Home
 * Purpose: Defines the Class Kupovina
 ***********************************************************************/

import java.util.*;

/** @pdOid 3e4b9aee-5000-4516-bdd8-885cb68beb68 */
public class Kupovina implements Serializable {
   public Float getCena() {
		return cena;
	}

	public void setCena(Float float1) {
		this.cena = float1;
	}

	public Dostavljac getDostavljac() {
		return dostavljac;
	}

	public void setDostavljac(Dostavljac dostavljac) {
		this.dostavljac = dostavljac;
	}



	public String getKupac() {
		return kupac;
	}

	public void setKupac(String kupac) {
		this.kupac = kupac;
	}

	public Prodavnica getProdavnica() {
		return prodavnica;
	}

	public void setProdavnica(Prodavnica prodavnica) {
		this.prodavnica = prodavnica;
	}
 
	public int getKolicina() {
		return kolicina;
	}
	
	public void setKolicina(int kolicina) {
		this.kolicina = kolicina;
	}
	   public Proizvod getProizvod() {
			return proizvod;
		}

		public void setProizvod(Proizvod proizvod) {
			this.proizvod = proizvod;
		}

		/** @pdOid 6da81932-ac8c-4a83-a6d3-1fdaccec6cca */
		   public int getSifra() {
		      return sifra;
		   }
		   
		   /** @param newSifra
		    * @pdOid a12cd7a3-7c75-469e-8a5f-9f459fc51436 */
		   public void setSifra(int newSifra) {
		      sifra = newSifra;
		   }
/** @pdOid 0f73f20a-1ac8-46d5-9436-75e59aff17a8 */
   private int sifra;
   /** @pdOid 4b07c22e-408b-4fd6-bee0-bb7a3d9d6505 */
   private Float cena;
   /** @pdOid 578376fc-bf07-4468-a0c4-5956e16fe8bd */
   private Dostavljac dostavljac;
   /** @pdOid a1f8f27f-0154-40c4-9b79-c0cd437239cb */
   private String kupac;
   /** @pdOid 29a29e2a-13c7-430b-8671-96f9889ae6a7 */
   private Prodavnica prodavnica;
   
   /** @pdRoleInfo migr=no name=Proizvod assc=association1 coll=java.util.List impl=java.util.ArrayList mult=0..* side=A */
   public Proizvod proizvod;
   
   private int sifraKupovine;
   
   private int kolicina;



   
   
  

}