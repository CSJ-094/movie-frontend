package com.boot.elastic;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Data
@Document(indexName = "movies", createIndex = false) // 파이썬에서 만든 인덱스 이름 "movies"
public class Movie {

    @Id
    private Long id;

    @Field(type = FieldType.Text, analyzer = "nori_analyzer") // 형태소 분석기 적용
    private String title;

    @Field(type = FieldType.Text, analyzer = "nori_analyzer")
    private String overview;

    @Field(name = "poster_path", type = FieldType.Keyword)
    @JsonProperty("poster_path")
    private String posterPath;

    @Field(name = "vote_average", type = FieldType.Double)
    @JsonProperty("vote_average")
    private Double voteAverage;

    @Field(name = "is_now_playing", type = FieldType.Boolean)
    @JsonProperty("is_now_playing")
    private Boolean isNowPlaying; // 상영 여부 (Mashup 데이터)
}