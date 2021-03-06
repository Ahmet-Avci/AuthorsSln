﻿using DataBaseContext.Enums;
using System.Collections.Generic;

namespace DtoLayer.Dto
{
    /// <summary>
    /// Yazarlar ve kullanıcıları tutar
    /// </summary>
    public class AuthorDto : BaseDto
    {

        /// <summary>
        /// Kullanıcıya ait eserin id'si
        /// </summary>
        public int? ArticleId { get; set; }

        /// <summary>
        /// Kullanıcı Adı
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Kullanıcı Soyadı
        /// </summary>
        public string Surname { get; set; }

        /// <summary>
        /// Yazarın otobiyografisi
        /// </summary>
        public string Autobiography { get; set; }

        /// <summary>
        /// Kullanıcı Telefon Numarası
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Kullanıcı mail adresi
        /// </summary>
        public string MailAddress { get; set; }

        /// <summary>
        /// Kullanıcı şifresi
        /// </summary>
        public string Password {
            get
            {
                return string.Empty;
            }
            set
            {

            }
        }

        /// <summary>
        /// Kullanıcı tipini belirtir
        /// </summary>
        public AuthorType AuthorType { get; set; }

        /// <summary>
        /// Yazarın aktif olup olmadığını bakar(banlanıp banlanmadığına)
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Profil resmini tutar
        /// </summary>
        public string Image { get; set; }

        //Only Dto fields
        public string Content { get; set; }
        public string Header { get; set; }
        public int ReadCount { get; set; }
        public bool IsLike { get; set; }
        public bool IsFavorited { get; set; }
        public string ImagePath { get; set; }
        public int ArticleCount { get; set; }
        public int TotalReadCount { get; set; }

        public virtual List<ArticleDto> ArticleList { get; set; }

    }
}
