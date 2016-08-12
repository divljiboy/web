package beans;

/** @pdOid 9c235c2e-1d92-4b75-8553-235a1055f14d */
public class Korisnik {
   /** @pdOid e749bde4-220b-4946-a9c5-6bbaf90dffee */
   private String username;
   /** @pdOid 2c8452ee-072e-40c2-8e3a-ccfd8a0a5460 */
   private String password;
   /** @pdOid c7f9ed32-d76e-4857-a0cd-0545a024a946 */
   private String ime;
   /** @pdOid 0c22fab1-1ebe-499b-92d7-741bca2c4a30 */
   private String prezime;
   /** @pdOid f3ae7f99-8907-4510-9443-d74864dd995b */
   private Uloga uloga;
   /** @pdOid c28a8c97-5010-4ac7-b0a2-c8e0dffb12c8 */
   private String telefon;
   /** @pdOid eaf9e0cf-2f60-40e6-9dd2-593f5c46a1e0 */
   private String email;
   /** @pdOid 6ff06508-7082-4be6-9493-d77160e67a90 */
   private String adresa;
   /** @pdOid d7357fa3-fc17-4d30-88f9-f6537b01b314 */
   private String drzava;
   
   /** @pdOid f10d8621-2ad0-4017-a909-09a131cbc75a */
   public String getDrzava() {
      return drzava;
   }
   
   /** @param newDrzava
    * @pdOid ffc000ce-5d72-4964-bca2-20664f61161d */
   public void setDrzava(String newDrzava) {
      drzava = newDrzava;
   }
   
   /** @pdOid d8806ba1-d07c-455d-8ae8-e57f236537f0 */
   public String getUsername() {
      return username;
   }
   
   /** @param newUsername
    * @pdOid d8ffda8d-e854-456d-9c0b-d65a274b1cee */
   public void setUsername(String newUsername) {
      username = newUsername;
   }

}