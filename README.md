# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Sabtu, 21 November 2026 pukul 15.47.24

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 4 |
| 📍 **Wilayah** | Pusat gempa berada di laut 52 km utara Ruteng, Manggarai |
| 🕒 **Waktu** | 21 Nov 2026, 09:37:18 WIB |
| 🧭 **Koordinat** | -8.14,120.46 |
| 📏 **Kedalaman** | 5 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | II - III Kab. Manggarai |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 21 Nov 2026 09:37:18 WIB | **M 4** | Pusat gempa berada di laut 52 km utara Ruteng, Manggarai | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 21 Nov 2026 00:50:26 WIB | **M 4.6** | Pusat gempa berada di laut 66 km selatan Kota Sukabumi | 17 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 20 Nov 2026 18:34:42 WIB | **M 3.2** | Pusat gempa berada di laut 10 km Utara Kendari | 6 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 20 Nov 2026 04:42:40 WIB | **M 4.3** | Pusat gempa berada di laut 48 km Ruteng-Manggarai | 2 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 19 Nov 2026 16:08:41 WIB | **M 3.5** | Pusat gempa berada di darat 19 km timur laut Sumbawa | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 19 Nov 2026 13:31:50 WIB | **M 3.6** | Pusat gempa berada di darat 20 km timur laut Luwu Timur | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 18 Nov 2026 23:11:00 WIB | **M 4** | Pusat gempa berada di laut 57 km utara Ruteng - Manggarai | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 18 Nov 2026 15:01:44 WIB | **M 4.2** | Pusat gempa berada di laut 42 km utara Ruteng-Manggarai | 19 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 17 Nov 2026 07:49:17 WIB | **M 4.8** | Pusat gempa berada di laut 49 km timur laut Ruteng, Manggarai | 2 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 16 Nov 2026 18:36:57 WIB | **M 3.8** | Pusat gempa berada di darat 12 km Barat Laut Tanggamus-Lampung | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 16 Nov 2026 03:51:57 WIB | **M 5.4** | 265 km Tenggara BURUSELATAN-MALUKU | 323 km | Tidak berpotensi tsunami |
| 15 Nov 2026 22:41:15 WIB | **M 5.4** | 127 km BaratLaut GORONTALOUTARA-GORONTALO | 465 km | Tidak berpotensi tsunami |
| 15 Nov 2026 04:24:20 WIB | **M 4.5** | Pusat gempa berada di laut 56 km utara Ruteng, Manggarai | 2 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 13 Nov 2026 14:31:39 WIB | **M 4.1** | Pusat gempa berada di laut 24 km selatan Enggano | 24 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 13 Nov 2026 11:49:34 WIB | **M 4.9** | Pusat gempa berada di laut 29 km Barat Laut PULAUPANJANG | 17 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

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
