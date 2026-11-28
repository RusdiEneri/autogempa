# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Sabtu, 28 November 2026 pukul 18.51.20

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 4.6 |
| 📍 **Wilayah** | Pusat gempa berada di laut 125 km barat Jantho-Aceh Besar |
| 🕒 **Waktu** | 28 Nov 2026, 15:30:40 WIB |
| 🧭 **Koordinat** | 5.03,94.50 |
| 📏 **Kedalaman** | 11 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | II - III Banda Aceh, II - III Aceh Besar |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 28 Nov 2026 15:30:40 WIB | **M 4.6** | Pusat gempa berada di laut 125 km barat Jantho-Aceh Besar | 11 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 28 Nov 2026 02:28:05 WIB | **M 4.3** | Pusat gempa berada di darat 62 km Timur Laut Luwu Utara | 4 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 27 Nov 2026 10:59:44 WIB | **M 2.6** | Pusat gempa berada di darat 13 km barat Bener Meriah | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 26 Nov 2026 22:40:36 WIB | **M 4.2** | Pusat gempa berada di laut 34 km utara Ransiki | 14 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 26 Nov 2026 16:08:39 WIB | **M 5.6** | 230 km Tenggara SUMBAWABARAT-NTB | 10 km | Tidak berpotensi tsunami |
| 25 Nov 2026 20:28:30 WIB | **M 3.5** | Pusat gempa berada di darat 29 km Utara Ruteng, Manggarai | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 25 Nov 2026 12:33:27 WIB | **M 4** | Pusat gempa berada di laut 53 km utara Ruteng-Manggarai | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 23 Nov 2026 18:24:32 WIB | **M 5.3** | 241 km TimurLaut RAJAAMPAT-PAPUABRTDY | 10 km | Tidak berpotensi tsunami |
| 23 Nov 2026 14:36:24 WIB | **M 5.4** | 87 km TimurLaut MALUKUBRTDAYA | 141 km | Tidak berpotensi tsunami |
| 22 Nov 2026 14:54:39 WIB | **M 5.4** | Pusat gempa berada di laut 98 km BaratDaya Melonguane | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 22 Nov 2026 06:16:01 WIB | **M 4.8** | Pusat gempa berada di laut 35 km barat laut Sentani | 6 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 22 Nov 2026 02:52:18 WIB | **M 4.2** | Pusat gempa berada di laut 34 km Barat Pesisir Selatan | 55 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 21 Nov 2026 16:42:11 WIB | **M 7.2** | Pusat gempa berada di laut 43 km barat laut Maluku Barat Daya | 125 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 21 Nov 2026 09:37:18 WIB | **M 4** | Pusat gempa berada di laut 52 km utara Ruteng, Manggarai | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 21 Nov 2026 00:50:26 WIB | **M 4.6** | Pusat gempa berada di laut 66 km selatan Kota Sukabumi | 17 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

---

## 🛠️ Cara Kerja Repository Ini

- Workflow `.github/workflows/bmkg.yml` berjalan otomatis setiap **5 menit**.
- `src/index.js` mengambil data dari `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`.
- Jika terdeteksi gempa **baru**:
  - `README.md` di-generate ulang (info detail + shakemap),
  - gambar shakemap disimpan ke `assets/shakemap.jpg`,
  - riwayat disimpan di `data/history.json` (maksimal 15 gempa),
  - checkpoint ID disimpan di `data/last.json`,
  - semua di-commit & push otomatis ke branch `main`.
- **Fitur Self-Healing**: jika BMKG merilis parameter gempa lebih dulu dan gambar shakemap menyusul beberapa menit kemudian, sistem otomatis mengunduh shakemap susulan dan memperbarui `README.md` tanpa menduplikasi notifikasi.
- Notifikasi **Discord** tetap dikirim jika magnitudo ≥ `MIN_MAGNITUDE`.

---

<div align="center">

Dibuat dengan ❤️ oleh [RusdiEneri](https://github.com/RusdiEneri) • Sumber data: [BMKG](https://www.bmkg.go.id/)

_README ini dibuat otomatis oleh GitHub Actions — jangan edit manual._

</div>
