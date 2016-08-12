package beans;

/***********************************************************************
 * Module:  Recenzija.java
 * Author:  Home
 * Purpose: Defines the Class Recenzija
 ***********************************************************************/
import java.util.Date;

/** @pdOid 53159b44-31bd-41dc-a58a-436b76ded788 */
public class Recenzija {
   /** @pdOid 327e94ee-b40a-4dfd-8b6e-3b5ab3fdafc4 */
   private int sifra;
   /** @pdOid a1eae3ba-f57f-49b2-bbc9-148e87961503 */
   private Date datum;
   /** @pdOid 68410eb2-8bda-4eaf-a05e-50b6e2899445 */
   private Float ocena;
   /** @pdOid 7f40344e-e52e-430f-87ee-9545da001db1 */
   private String komentar;
   /** @pdOid 6f3d1f3a-7c6f-4c65-923c-33e36e48938b */
   private Korisnik korsnik;
   
   private Proizvod proizvod;
   
   /** @pdOid 081168d5-848e-4004-9656-b6f0a62b9619 */
   public String getKomentar() {
      return komentar;
   }
   
   /** @param newKomentar
    * @pdOid ffbd4c26-4ae2-4200-a2ba-8f4422f597ec */
   public void setKomentar(String newKomentar) {
      komentar = newKomentar;
   }
   
   /** @pdOid 07b8ff3a-28c3-4eb4-85e8-a3fdd720cf06 */
   public int getSifra() {
      return sifra;
   }
   
   /** @param newSifra
    * @pdOid c4441f01-726b-4aff-b982-7124d818fa58 */
   public void setSifra(int newSifra) {
      sifra = newSifra;
   }

}