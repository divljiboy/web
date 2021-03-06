package beans;

import java.io.Serializable;

/** @pdOid a1034296-6d43-464c-9432-06ac1d9bcbb7 */
public class Dostavljac implements Serializable{
   /**
	 * 
	 */
	private static final long serialVersionUID = -9107221058027758662L;
/**
	 * 
	 */
	
/** @pdOid 94f6c11b-5e9e-46e7-8050-f2d512b42791 */
   private int sifra;
   public String getNaziv() {
	return naziv;
}

public void setNaziv(String naziv) {
	this.naziv = naziv;
}

public String getOpis() {
	return opis;
}

public void setOpis(String opis) {
	this.opis = opis;
}

public String getDrzava() {
	return drzava;
}

public void setDrzava(String drzava) {
	this.drzava = drzava;
}

public float getTarifa() {
	return tarifa;
}

public void setTarifa(float tarifa) {
	this.tarifa = tarifa;
}

/** @pdOid 14509fd1-4fae-4ea1-98ff-c7f0f367e435 */
   private String naziv;
   /** @pdOid 8083cfa8-1648-449f-aa7a-747e85bf3766 */
   private String opis;
   /** @pdOid 3e173722-4125-4dda-8e0f-040135ff231c */
   private String drzava;
   /** @pdOid 2b5fe140-532e-4063-8956-8f3ddc41ef6b */
   private float tarifa;
   
   /** @pdOid 1b6d80cb-6b84-4ece-99f0-64fa7f207756 */
   public int getSifra() {
      return sifra;
   }
   
   /** @param newSifra
    * @pdOid 0073819e-cc73-4ba5-9557-aa8556e67adb */
   public void setSifra(int newSifra) {
      sifra = newSifra;
   }

}