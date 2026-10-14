# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Rabu, 14 Oktober 2026 pukul 21.18.38

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 3.8 |
| 📍 **Wilayah** | Pusat gempa berada di laut 53 km utara Ruteng, Manggarai |
| 🕒 **Waktu** | 14 Okt 2026, 17:30:57 WIB |
| 🧭 **Koordinat** | -8.14,120.56 |
| 📏 **Kedalaman** | 10 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | II - III Kab. Manggarai |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 14 Okt 2026 17:30:57 WIB | **M 3.8** | Pusat gempa berada di laut 53 km utara Ruteng, Manggarai | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 13 Okt 2026 17:22:02 WIB | **M 4.5** | Pusat gempa berada di laut 103 km selatan Pacitan | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 13 Okt 2026 13:42:28 WIB | **M 4.6** | Pusat gempa berada di laut 15 km selatan Kodi-Sumba Barat Daya | 16 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 12 Okt 2026 23:56:33 WIB | **M 4.3** | Pusat gempa berada di laut 19 km Selatan Kodi, Sumba Barat Daya | 19 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 12 Okt 2026 12:28:13 WIB | **M 4.1** | Pusat gempa berada di laut 44 km selatan Kab. Blitar | 101 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 12 Okt 2026 05:07:28 WIB | **M 4.5** | Pusat gempa berada di darat 7 km tenggara Deiyai | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 11 Okt 2026 17:17:12 WIB | **M 4** | Pusat gempa berada di darat 5 km selatan Pasaman | 16 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 11 Okt 2026 10:30:20 WIB | **M 5.7** | 193 km BaratDaya KAB-SUKABUMI-JABAR | 10 km | Tidak berpotensi tsunami |
| 10 Okt 2026 19:28:18 WIB | **M 4** | Pusat gempa berada di laut 50 km selatan Aceh Singkil | 9 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 10 Okt 2026 18:53:23 WIB | **M 4.4** | Pusat gempa berada di laut 100 km barat daya Pacitan | 75 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 09 Okt 2026 17:34:55 WIB | **M 2.4** | Pusat gempa berada di darat 12 km barat Kendari | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 09 Okt 2026 12:11:04 WIB | **M 5.1** | Pusat gempa berada di laut 125 km Tenggara Bitung | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 09 Okt 2026 01:06:02 WIB | **M 4.7** | Pusat gempa berada di laut 39 km utara Waingapu | 59 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 08 Okt 2026 22:23:47 WIB | **M 4.4** | Pusat gempa berada di laut 71 km Barat Bengkulu Utara | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 08 Okt 2026 15:07:56 WIB | **M 5.8** | Pusat gempa berada di laut 230 km barat laut Tahuna - Kep.Sangihe | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

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
