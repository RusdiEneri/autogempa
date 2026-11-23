# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Senin, 23 November 2026 pukul 18.05.46

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 5.4 |
| 📍 **Wilayah** | 87 km TimurLaut MALUKUBRTDAYA |
| 🕒 **Waktu** | 23 Nov 2026, 14:36:24 WIB |
| 🧭 **Koordinat** | -7.63,128.38 |
| 📏 **Kedalaman** | 141 km |
| 🌊 **Potensi** | Tidak berpotensi tsunami |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 23 Nov 2026 14:36:24 WIB | **M 5.4** | 87 km TimurLaut MALUKUBRTDAYA | 141 km | Tidak berpotensi tsunami |
| 22 Nov 2026 14:54:39 WIB | **M 5.4** | Pusat gempa berada di laut 98 km BaratDaya Melonguane | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 22 Nov 2026 06:16:01 WIB | **M 4.8** | Pusat gempa berada di laut 35 km barat laut Sentani | 6 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 22 Nov 2026 02:52:18 WIB | **M 4.2** | Pusat gempa berada di laut 34 km Barat Pesisir Selatan | 55 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 21 Nov 2026 16:42:11 WIB | **M 7.2** | Pusat gempa berada di laut 43 km barat laut Maluku Barat Daya | 125 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
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
