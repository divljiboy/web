package beans;

/***********************************************************************
 * Module:  Kategorija.java
 * Author:  Home
 * Purpose: Defines the Class Kategorija
 ***********************************************************************/

import java.util.*;

/** @pdOid 5787a727-924d-402d-8cf7-b541bfd20c0a */
public class Kategorija {
   /** @pdOid 8192a5d9-ec5f-4da3-a664-576cfdbf5272 */
   private String naziv;
   /** @pdOid c2509586-ce90-43c7-aefc-76eb6225f584 */
   private String opis;
   
   /** @pdRoleInfo migr=no name=Kategorija assc=association3 coll=java.util.Collection impl=java.util.HashSet mult=0..* */
   public java.util.Collection<Kategorija> kategorijaB;
   
   /** @pdOid c07e9623-df8c-4f69-8461-2d6264a3268d */
   public String getNaziv() {
      return naziv;
   }
   
   /** @param newNaziv
    * @pdOid 6e671af4-c5a3-4f25-8632-0c08d171131d */
   public void setNaziv(String newNaziv) {
      naziv = newNaziv;
   }
   
   
   /** @pdGenerated default getter */
   public java.util.Collection<Kategorija> getKategorijaB() {
      if (kategorijaB == null)
         kategorijaB = new java.util.HashSet<Kategorija>();
      return kategorijaB;
   }
   
   /** @pdGenerated default iterator getter */
   public java.util.Iterator getIteratorKategorijaB() {
      if (kategorijaB == null)
         kategorijaB = new java.util.HashSet<Kategorija>();
      return kategorijaB.iterator();
   }
   
   /** @pdGenerated default setter
     * @param newKategorijaB */
   public void setKategorijaB(java.util.Collection<Kategorija> newKategorijaB) {
      removeAllKategorijaB();
      for (java.util.Iterator iter = newKategorijaB.iterator(); iter.hasNext();)
         addKategorijaB((Kategorija)iter.next());
   }
   
   /** @pdGenerated default add
     * @param newKategorija */
   public void addKategorijaB(Kategorija newKategorija) {
      if (newKategorija == null)
         return;
      if (this.kategorijaB == null)
         this.kategorijaB = new java.util.HashSet<Kategorija>();
      if (!this.kategorijaB.contains(newKategorija))
         this.kategorijaB.add(newKategorija);
   }
   
   /** @pdGenerated default remove
     * @param oldKategorija */
   public void removeKategorijaB(Kategorija oldKategorija) {
      if (oldKategorija == null)
         return;
      if (this.kategorijaB != null)
         if (this.kategorijaB.contains(oldKategorija))
            this.kategorijaB.remove(oldKategorija);
   }
   
   /** @pdGenerated default removeAll */
   public void removeAllKategorijaB() {
      if (kategorijaB != null)
         kategorijaB.clear();
   }

}