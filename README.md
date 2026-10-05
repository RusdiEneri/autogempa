# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Senin, 05 Oktober 2026 pukul 15.55.42

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 4.6 |
| 📍 **Wilayah** | Pusat gempa berada di laut 112 km selatan Lumajang |
| 🕒 **Waktu** | 05 Okt 2026, 09:16:32 WIB |
| 🧭 **Koordinat** | -9.13,113.07 |
| 📏 **Kedalaman** | 4 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | III Lumajang, II Blitar, II Malang, II Jember |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 15 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 05 Okt 2026 09:16:32 WIB | **M 4.6** | Pusat gempa berada di laut 112 km selatan Lumajang | 4 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 05 Okt 2026 06:19:11 WIB | **M 3.9** | Pusat gempa berada di laut 6 Km selatan Kodi, Sumba Barat Daya | 14 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 04 Okt 2026 21:59:43 WIB | **M 4.8** | Pusat gempa berada di laut 13 km Selatan Kodi-Sumba Barat Daya | 21 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 04 Okt 2026 19:36:47 WIB | **M 4.6** | Pusat gempa berada di laut 149 km selatan Kab. Malang | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 04 Okt 2026 08:31:56 WIB | **M 4.2** | Pusat gempa berada di laut 61 km selatan Kab. Sukabumi | 36 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 04 Okt 2026 06:37:31 WIB | **M 5.9** | Pusat gempa berada di laut 68 km barat daya Calang | 26 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 02 Okt 2026 18:34:10 WIB | **M 2.1** | Pusat gempa berada di darat 2 km Barat Kolaka | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 02 Okt 2026 13:48:10 WIB | **M 4.3** | Pusat gempa berada di laut 82 km Timur Laut RUTENG-MANGGARAI-NTT | 17 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 02 Okt 2026 07:46:54 WIB | **M 3.8** | Pusat gempa berada di laut 29 km barat daya Tabanan | 86 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 01 Okt 2026 21:20:00 WIB | **M 5.1** | Pusat gempa berada di laut 111 km tenggara Selayar | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 01 Okt 2026 18:51:40 WIB | **M 3.6** | Pusat gempa berada di laut 26 km barat laut Gorontalo Utara | 47 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 01 Okt 2026 07:43:06 WIB | **M 3.1** | Pusat gempa berada di Laut 31 km Barat Kab. Kupang | 6 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 30 Sep 2026 17:58:51 WIB | **M 4.7** | Pusat gempa berada di laut 26 km Barat Kab. Kupang | 10 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 30 Sep 2026 09:35:54 WIB | **M 4.1** | Pusat gempa berada di laut 54 km barat laut Calang-Aceh Jaya | 5 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 29 Sep 2026 21:39:13 WIB | **M 3.1** | Pusat gempa berada di darat 5 km Barat Kolaka | 3 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

---

## 🛠️ Cara Kerja Repository Ini

- Workflow `.github/workflows/bmkg.yml` berjalan otomatis setiap **5 menit**.
- `src/index.js` mengambil data dari `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`.
- Jika terdeteksi gempa **baru**:
  - `README.md` di-generate ulang (info detail + shakemap),
  - gambar shakemap disimpan ke `assets/shakemap.jpg`,
  - riwayat disimpan di `data/history.json` (maksimal 15 gempa),
  - semua di-commit & push otomatis ke branch `main`.
- Notifikasi **Discord** tetap dikirim jika magnitudo ≥ `MIN_MAGNITUDE`.

---

<div align="center">

Dibuat dengan ❤️ oleh [RusdiEneri](https://github.com/RusdiEneri) • Sumber data: [BMKG](https://www.bmkg.go.id/)

_README ini dibuat otomatis oleh GitHub Actions — jangan edit manual._

</div>
