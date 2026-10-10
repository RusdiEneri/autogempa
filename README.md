# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Minggu, 11 Oktober 2026 pukul 00.24.02

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 4 |
| 📍 **Wilayah** | Pusat gempa berada di laut 50 km selatan Aceh Singkil |
| 🕒 **Waktu** | 10 Okt 2026, 19:28:18 WIB |
| 🧭 **Koordinat** | 1.91,97.96 |
| 📏 **Kedalaman** | 9 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | III Aceh Singkil |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 10 Okt 2026 19:28:18 WIB | **M 4** | Pusat gempa berada di laut 50 km selatan Aceh Singkil | 9 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 10 Okt 2026 18:53:23 WIB | **M 4.4** | Pusat gempa berada di laut 100 km barat daya Pacitan | 75 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 09 Okt 2026 17:34:55 WIB | **M 2.4** | Pusat gempa berada di darat 12 km barat Kendari | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 09 Okt 2026 12:11:04 WIB | **M 5.1** | Pusat gempa berada di laut 125 km Tenggara Bitung | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 09 Okt 2026 01:06:02 WIB | **M 4.7** | Pusat gempa berada di laut 39 km utara Waingapu | 59 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 08 Okt 2026 22:23:47 WIB | **M 4.4** | Pusat gempa berada di laut 71 km Barat Bengkulu Utara | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 08 Okt 2026 15:07:56 WIB | **M 5.8** | Pusat gempa berada di laut 230 km barat laut Tahuna - Kep.Sangihe | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 08 Okt 2026 09:30:17 WIB | **M 3.9** | Pusat gempa berada di darat 6 km Timur Laut Waikabubak | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 07 Okt 2026 19:03:42 WIB | **M 4.2** | Pusat gempa berada di laut 39 km Utara Mbay-Nagekeo | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 07 Okt 2026 12:44:23 WIB | **M 4** | Pusat gempa berada di laut 13 km Timur Manokwari | 16 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 07 Okt 2026 04:56:46 WIB | **M 4.8** | Pusat gempa berada di darat 31 km tenggara Yalimo | 50 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 07 Okt 2026 03:15:26 WIB | **M 5.2** | Pusat gempa berada di darat 9 km tenggara Lombok Barat | 92 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 06 Okt 2026 20:53:22 WIB | **M 3.9** | Pusat gempa berada di laut 35 km barat daya Sumur | 28 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 06 Okt 2026 10:42:45 WIB | **M 4.4** | Pusat gempa berada di laut 84 km Utara Ruteng | 21 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 06 Okt 2026 04:38:04 WIB | **M 4.6** | Pusat gempa berada di laut 14 km selatan Kodi, Sumba Barat Daya | 19 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

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
