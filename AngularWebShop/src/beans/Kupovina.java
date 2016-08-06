package beans;

/***********************************************************************
 * Module:  Kupovina.java
 * Author:  Home
 * Purpose: Defines the Class Kupovina
 ***********************************************************************/

import java.util.*;

/** @pdOid 3e4b9aee-5000-4516-bdd8-885cb68beb68 */
public class Kupovina {
   /** @pdOid 0f73f20a-1ac8-46d5-9436-75e59aff17a8 */
   private int sifra;
   /** @pdOid 4b07c22e-408b-4fd6-bee0-bb7a3d9d6505 */
   private int cena;
   /** @pdOid 578376fc-bf07-4468-a0c4-5956e16fe8bd */
   private Dostavljac dostavljac;
   /** @pdOid a1f8f27f-0154-40c4-9b79-c0cd437239cb */
   private Korisnik kupac;
   /** @pdOid 29a29e2a-13c7-430b-8671-96f9889ae6a7 */
   private Prodavnica prodavnica;
   
   /** @pdRoleInfo migr=no name=Proizvod assc=association1 coll=java.util.List impl=java.util.ArrayList mult=0..* side=A */
   public java.util.List<Proizvod> proizvod;
   
   /** @pdOid 6da81932-ac8c-4a83-a6d3-1fdaccec6cca */
   public int getSifra() {
      return sifra;
   }
   
   /** @param newSifra
    * @pdOid a12cd7a3-7c75-469e-8a5f-9f459fc51436 */
   public void setSifra(int newSifra) {
      sifra = newSifra;
   }
   
   
   /** @pdGenerated default getter */
   public java.util.List<Proizvod> getProizvod() {
      if (proizvod == null)
         proizvod = new java.util.ArrayList<Proizvod>();
      return proizvod;
   }
   
   /** @pdGenerated default iterator getter */
   public java.util.Iterator getIteratorProizvod() {
      if (proizvod == null)
         proizvod = new java.util.ArrayList<Proizvod>();
      return proizvod.iterator();
   }
   
   
   /** @pdGenerated default setter
     * @param newProizvod */
   public void setProizvod(java.util.List<Proizvod> newProizvod) {
      removeAllProizvod();
      for (java.util.Iterator iter = newProizvod.iterator(); iter.hasNext();)
         addProizvod((Proizvod)iter.next());
   }
   
   /** @pdGenerated default add
     * @param newProizvod */
   public void addProizvod(Proizvod newProizvod) {
      if (newProizvod == null)
         return;
      if (this.proizvod == null)
         this.proizvod = new java.util.ArrayList<Proizvod>();
      if (!this.proizvod.contains(newProizvod))
         this.proizvod.add(newProizvod);
   }
   
   /** @pdGenerated default remove
     * @param oldProizvod */
   public void removeProizvod(Proizvod oldProizvod) {
      if (oldProizvod == null)
         return;
      if (this.proizvod != null)
         if (this.proizvod.contains(oldProizvod))
            this.proizvod.remove(oldProizvod);
   }
   
   /** @pdGenerated default removeAll */
   public void removeAllProizvod() {
      if (proizvod != null)
         proizvod.clear();
   }

}