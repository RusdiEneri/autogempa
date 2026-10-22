# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Kamis, 22 Oktober 2026 pukul 22.32.48

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 5.2 |
| 📍 **Wilayah** | Pusat gempa berada di darat 6 km BaratLaut Lebong |
| 🕒 **Waktu** | 22 Okt 2026, 17:57:49 WIB |
| 🧭 **Koordinat** | -3.11,102.14 |
| 📏 **Kedalaman** | 120 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | III Kota Bengkulu, II - III Curup, III Arga Makmur |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 22 Okt 2026 17:57:49 WIB | **M 5.2** | Pusat gempa berada di darat 6 km BaratLaut Lebong | 120 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 21 Okt 2026 18:58:36 WIB | **M 2.5** | Pusat gempa berada di darat 9 km utara Tanggamus | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 21 Okt 2026 14:44:15 WIB | **M 5.1** | 62 km TimurLaut MALUKUBRTDAYA | 96 km | Tidak berpotensi tsunami |
| 20 Okt 2026 23:29:35 WIB | **M 5.4** | Pusat gempa berada di laut 59 km barat daya Meulaboh | 74 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 20 Okt 2026 18:28:11 WIB | **M 3.7** | Pusat gempa berada di laut 6 km Barat Laut Pulau Saringi | 15 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 20 Okt 2026 16:56:38 WIB | **M 3.4** | Pusat gempa berada di darat 30km Barat Daya Kab. Kupang | 4 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 19 Okt 2026 20:46:11 WIB | **M 4.2** | Pusat gempa berada di darat 26 km Timur Laut Kab. Gayo Lues | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 19 Okt 2026 19:06:02 WIB | **M 4.5** | Pusat gempa berada di laut 60 km Utara Labuanbajo | 6 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 18 Okt 2026 15:02:46 WIB | **M 4.1** | Pusat gempa berada di laut 56 km utara Ruteng | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 17 Okt 2026 22:45:27 WIB | **M 2.6** | Pusat gempa berada di darat 39 km selatan Morowali Utara | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 17 Okt 2026 19:46:17 WIB | **M 4.6** | Pusat gempa berada di laut 49 km Barat KODI-SUMBABARATDAYA | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 17 Okt 2026 15:20:52 WIB | **M 4.2** | Pusat gempa berada di Laut 11 km TimurLaut Kota Sorong | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 16 Okt 2026 21:22:04 WIB | **M 2.3** | Pusat gempa berada di darat 26 km Barat Daya Kota Bogor | 18 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 16 Okt 2026 10:21:55 WIB | **M 2.5** | Pusat gempa berada di darat 21 km Barat Daya Kota Bogor | 9 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 15 Okt 2026 22:32:38 WIB | **M 2.7** | Pusat gempa berada di darat 21 km barat Kab. Garut | 4 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

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
