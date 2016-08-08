package beans;

/** @pdOid c3fc8a09-92b2-4102-abbb-ac1941b964f8 */
public class Prodavnica {
   /** @pdOid e61cbe1a-f5d6-43bc-a28f-257c53efa724 */
   private int sifra;
   /** @pdOid 85416eb4-e94e-435f-ac4e-c404a5777789 */
   private String naziv;
   /** @pdOid f76e3289-1066-4888-80cf-dddd3880658d */
   private String adresa;
   /** @pdOid e44c074a-dd51-4225-9ed9-efe752d67787 */
   private String drzava;
   /** @pdOid 832634e0-c26e-4869-a0b9-f8a19813d181 */
   private String telefon;
   /** @pdOid f4a27f45-78fc-4724-9c13-3d213e233f57 */
   private String email;
   /** @pdOid 1e46ad27-8aff-463c-88ea-ccbced663cbf */
   private Korisnik prodavac;
   /** @pdOid 06a758c2-c809-4079-b1c0-e27c3e677b6e */
   private Float ocena;
   
   /** @pdOid 5f3a7cdd-78c2-4782-8d6a-2022a95ed1ba */
   public Float getOcena() {
      return ocena;
   }
   
   /** @param newOcena
    * @pdOid 6c801d43-ffff-47d2-b02d-efd500361fec */
   public void setOcena(Float newOcena) {
      ocena = newOcena;
   }
   
   /** @pdOid cf1803e6-ab9c-4dff-bde0-b81b60ffb238 */
   public int getSifra() {
      return sifra;
   }
   
   /** @param newSifra
    * @pdOid 3976208b-19f0-47e7-9f0a-cf3be9109997 */
   public void setSifra(int newSifra) {
      sifra = newSifra;
   }

}