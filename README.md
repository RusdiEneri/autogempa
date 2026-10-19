# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Senin, 19 Oktober 2026 pukul 19.41.48

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 4.5 |
| 📍 **Wilayah** | Pusat gempa berada di laut 60 km Utara Labuanbajo |
| 🕒 **Waktu** | 19 Okt 2026, 19:06:02 WIB |
| 🧭 **Koordinat** | -7.99,120.09 |
| 📏 **Kedalaman** | 6 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | II Kab. Manggarai |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 19 Okt 2026 19:06:02 WIB | **M 4.5** | Pusat gempa berada di laut 60 km Utara Labuanbajo | 6 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 18 Okt 2026 15:02:46 WIB | **M 4.1** | Pusat gempa berada di laut 56 km utara Ruteng | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 17 Okt 2026 22:45:27 WIB | **M 2.6** | Pusat gempa berada di darat 39 km selatan Morowali Utara | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 17 Okt 2026 19:46:17 WIB | **M 4.6** | Pusat gempa berada di laut 49 km Barat KODI-SUMBABARATDAYA | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 17 Okt 2026 15:20:52 WIB | **M 4.2** | Pusat gempa berada di Laut 11 km TimurLaut Kota Sorong | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 16 Okt 2026 21:22:04 WIB | **M 2.3** | Pusat gempa berada di darat 26 km Barat Daya Kota Bogor | 18 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 16 Okt 2026 10:21:55 WIB | **M 2.5** | Pusat gempa berada di darat 21 km Barat Daya Kota Bogor | 9 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 15 Okt 2026 22:32:38 WIB | **M 2.7** | Pusat gempa berada di darat 21 km barat Kab. Garut | 4 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 15 Okt 2026 17:58:23 WIB | **M 4.1** | Pusat gempa berada di darat 26 km barat daya kota Bogor | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 14 Okt 2026 17:30:57 WIB | **M 3.8** | Pusat gempa berada di laut 53 km utara Ruteng, Manggarai | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 13 Okt 2026 17:22:02 WIB | **M 4.5** | Pusat gempa berada di laut 103 km selatan Pacitan | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 13 Okt 2026 13:42:28 WIB | **M 4.6** | Pusat gempa berada di laut 15 km selatan Kodi-Sumba Barat Daya | 16 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 12 Okt 2026 23:56:33 WIB | **M 4.3** | Pusat gempa berada di laut 19 km Selatan Kodi, Sumba Barat Daya | 19 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 12 Okt 2026 12:28:13 WIB | **M 4.1** | Pusat gempa berada di laut 44 km selatan Kab. Blitar | 101 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 12 Okt 2026 05:07:28 WIB | **M 4.5** | Pusat gempa berada di darat 7 km tenggara Deiyai | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

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
