﻿using System;
using System.ComponentModel.DataAnnotations;

namespace DbLayer
{

    /// <summary>
    /// Bütün veritabanı sınıflarının ortak olarak kullanacağı kolonlar
    /// </summary>
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
